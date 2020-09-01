import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme.js";

import NavBar from "./components/layout/NavBar";
import Home from "./components/home/Home";
import AiPono from "./components/aipono/AiPono";
import Kaula from "./components/kaula/Kaula";
import Lokoia from "./components/lokoia/Lokoia";

import "./App.css";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/kane-uhcc" exact component={Home} />
            <Route path="/kane-uhcc/aipono" exact component={AiPono} />
            <Route path="/kane-uhcc/kaula" exact component={Kaula} />
            <Route path="/kane-uhcc/lokoia" exact component={Lokoia} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
