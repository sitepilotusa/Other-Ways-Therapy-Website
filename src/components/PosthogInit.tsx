"use client";

import { useEffect } from "react";
import posthog, { type ConfigDefaults } from "posthog-js";

type PosthogInitProps = {
  apiKey?: string;
  apiHost?: string;
  uiHost?: string;
  defaults?: ConfigDefaults;
  captureExceptions?: boolean;
  debug?: boolean;
};

const defaultConfigDate: ConfigDefaults = "2025-05-24";
const INIT_FLAG = "__posthogInitialized";

export function PosthogInit({
  apiKey,
  apiHost = "/ingest",
  uiHost = "https://us.posthog.com",
  defaults = defaultConfigDate,
  captureExceptions = true,
  debug = false,
}: PosthogInitProps) {
  useEffect(() => {
    if (!apiKey) return;
    if (typeof window === "undefined") return;
    if ((window as unknown as Record<string, unknown>)[INIT_FLAG]) return;

    posthog.init(apiKey, {
      api_host: apiHost,
      ui_host: uiHost,
      defaults,
      capture_exceptions: captureExceptions,
      debug,
    });

    (window as unknown as Record<string, unknown>)[INIT_FLAG] = true;
  }, [apiKey, apiHost, uiHost, defaults, captureExceptions, debug]);

  return null;
}
