import theme from "./theme";

export function JoyUiMeta() {
  return (
    <meta
      name="theme-color"
      content={theme.colorSchemes.dark.palette.primary[700]}
    />
  );
}
