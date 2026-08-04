import { observable, computed, makeObservable } from "mobx";
import { computedFn } from "mobx-utils";
import { create, persist } from "mobx-persist";

import { Locale } from "./interfaces/Locale";
import { NavButtonName } from "./layouts/AppLayout";

import { defaultLightTheme, defaultDarkTheme, themeList } from "./themes";

function getBrowserLocale(): Locale {
  const supportedLocales: string[] = Object.values(Locale);
  return (
    ((navigator.languages || [navigator.language])
      .map(s => s.replace("-", "_"))
      .find(locale => supportedLocales.includes(locale)) as Locale) || Locale.en_US
  );
}

export const browserDefaultLocale = getBrowserLocale();

export class AppState {
  constructor() {
    makeObservable(this, {
      title: observable,
      responsiveLayout: observable,
      activeNavButton: observable,
      localLocale: observable,
      locale: computed,
      contentLocale: computed,
      browserPreferredTheme: observable,
      temporaryThemeOverride: observable,
      theme: computed,
      appLogoThemed: computed,
      showTagsInProblemSet: observable,
      token: observable,
      logout: observable,
      currentUser: observable,
      currentUserJoinedGroupsCount: observable,
      currentUserPrivileges: observable,
      userPreference: observable,
      serverPreference: observable,
      serverVersion: observable
    });
    this.initializationThemeDetection();
  }

  /* Begin current page info */

  // The current page's title
  title: string = "";

  // Some pages doesn't support responsive layout, set this to false to display PC page on mobile
  responsiveLayout: boolean = true;

  activeNavButton: NavButtonName;

  enterNewPage(title: string, activeNavButton: NavButtonName = null, responsiveLayout: boolean = true) {
    this.title = title;
    this.responsiveLayout = responsiveLayout;
    this.activeNavButton = activeNavButton;
  }

  /* End current page info */

  /* Begin localization info */

  // The locale set by user on the page footer, saved in current browser
  @persist
  localLocale: Locale = null;

  get locale(): Locale {
    if (this.localLocale && this.localLocale === (this.userPreference.locale?.system || browserDefaultLocale)) {
      setTimeout(() => (this.localLocale = null), 0);
    }
    return this.localLocale || (this.userPreference.locale?.system as Locale) || browserDefaultLocale;
  }

  get contentLocale(): Locale {
    return (this.userPreference.locale?.content as Locale) || this.locale;
  }

  /* End localization info */

  /* Begin theme info */

  initializationThemeDetection() {
    const mediaQueryList = window.matchMedia("only screen and (prefers-color-scheme: dark)");

    const onChange = (e: { matches: boolean }) =>
      (this.browserPreferredTheme = e.matches ? defaultDarkTheme : defaultLightTheme);
    onChange(mediaQueryList);

    if (mediaQueryList.addEventListener) mediaQueryList.addEventListener("change", onChange);
    else mediaQueryList.addListener(onChange);
  }

  browserPreferredTheme: string;

  // This is set if the user change theme but not saved yet
  temporaryThemeOverride?: string;

  get theme(): string {
    const themeSelector = (this.temporaryThemeOverride ?? this.userPreference?.theme) || "auto";
    return themeSelector !== "auto" && themeSelector in themeList ? themeSelector : this.browserPreferredTheme;
  }

  get appLogoThemed(): { src: string; style: React.CSSProperties } {
    const logoSelector = this.serverPreference.misc.appLogoForTheme[this.theme] || "original";
    const logoUrlSelector =
      logoSelector === "original" || logoSelector === "inverted"
        ? window.appLogo || this.serverPreference.misc.appLogo
        : logoSelector;
    const logoUrl = logoUrlSelector === "default" ? null : logoUrlSelector;
    const logoInverted = logoSelector === "inverted";
    return logoUrl
      ? {
          src: logoUrl,
          style: logoInverted
            ? {
                filter: "invert(1)"
              }
            : {}
        }
      : null;
  }

  /* End theme info */

  // TODO: move it out of global app state
  @persist
  showTagsInProblemSet: boolean = false;

  /* Begin session info */

  @persist
  token: string = "";

  @persist
  logout = false;

  currentUser: ApiTypes.UserMetaDto = null;

  currentUserJoinedGroupsCount: number = 0;

  currentUserPrivileges: ApiTypes.GetSessionInfoResponseDto["userPrivileges"] = [];

  currentUserHasPrivilege = computedFn(function (
    this: AppState,
    privilege: ApiTypes.GetSessionInfoResponseDto["userPrivileges"][0]
  ) {
    return this.currentUser && (this.currentUser.isAdmin || this.currentUserPrivileges.includes(privilege));
  });

  userPreference: ApiTypes.UserPreferenceDto = {};

  /* End session info */

  /* Begin server info */

  serverPreference: ApiTypes.PreferenceConfig = null;

  serverVersion: ApiTypes.ServerVersionDto = null;

  /* End server info */
}

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

export const appState = new AppState();
(window as any)._appState = appState;

export const initAppStateStore = async () => await hydrate("appState", appState);
