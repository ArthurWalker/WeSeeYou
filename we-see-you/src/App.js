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
import DisplayResult from "./pages/DisplayResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/main.css";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Router>
            <Switch>
              <Route path="/" exact>
                <FilledForm />
              </Route>
              <Route path="/display" exact>
                <DisplayResult />
              </Route>
            </Switch>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}
