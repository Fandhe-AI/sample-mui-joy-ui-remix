import CssBaseline from "@mui/joy/CssBaseline";

import type React from "react";

export interface Props {
  children: React.ReactNode;
}

export const JoyUiDocument: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
