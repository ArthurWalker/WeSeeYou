import ThemeToggler from "./components/ThemeToggler";
import FilledForm from "./pages/FilledForm";
import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

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
