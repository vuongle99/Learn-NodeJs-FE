import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { GlobalStyle } from "../styles/global-styles";
import LayOut from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/login"}
          component={LoginPage}
        />
        <LayOut>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/home"}
              component={HomePage}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/users"}
              component={UserPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </LayOut>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
