import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";

import theme from "./theme";

import type React from "react";

function createEmotionCache() {
  return createCache({ key: "css" });
}

export interface Props {
  children: React.ReactNode;
}

export const JoyUiProvider: React.FC<Props> = ({ children }) => {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </CacheProvider>
  );
};
