import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route exact={true} path="/dashboard" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
