import ThemeToggler from "./components/ThemeToggler";
import FilledForm from "./pages/FilledForm";
import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <FilledForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
