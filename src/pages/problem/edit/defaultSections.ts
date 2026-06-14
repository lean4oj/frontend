import { Locale } from "@/interfaces/Locale";

import type { LocalizedContentSection } from "./ProblemEditPage";

export default <Record<Locale, LocalizedContentSection[]>>{
  [Locale.zh_CN]: [
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "题目描述",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "形式化命题",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "提示",
      type: "Text",
      text: ""
    }
  ],
  [Locale.en_US]: [
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "Description",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "Formal statement",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "Hint",
      type: "Text",
      text: ""
    }
  ],
  [Locale.ja_JP]: [
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "問題文",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "形式な命題",
      type: "Text",
      text: ""
    },
    {
      uuid: crypto.randomUUID(),
      sectionTitle: "ヒント",
      type: "Text",
      text: ""
    }
  ]
};
