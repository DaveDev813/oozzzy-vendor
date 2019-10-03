import React, { ReactElement } from "react";
import { Switch, Route } from "react-router";
import Home from "./Screens/Home";

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
