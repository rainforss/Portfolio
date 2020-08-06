import React from "react";
import Header from "./main_page/Header";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Header} />
    </Switch>
  </>
);
export default App;
