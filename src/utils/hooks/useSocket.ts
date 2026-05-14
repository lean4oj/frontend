import { useEffect } from "react";
import { type EventSourceMessage, fetchEventSource } from "@microsoft/fetch-event-source";

import { appState } from "@/appState";

export function useSocket(
  url: string,
  query: URLSearchParams,
  onopen: (response: Response) => void,
  onmessage: (event: EventSourceMessage) => void,
  useOrNot: boolean
) {
  useEffect(() => {
    if (useOrNot) {
      const u = new URL(url, window.apiEndpoint);
      u.search = query.toString();
      const abortController = new AbortController();
      fetchEventSource(u, {
        signal: abortController.signal,
        openWhenHidden: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: appState.token && `Bearer ${appState.token}`,
        },
        onopen,
        onmessage,
        onerror(err) {
          console.log("SSE error:", err);
        }
      });

      return () => abortController.abort();
    }
  }, []);
}
