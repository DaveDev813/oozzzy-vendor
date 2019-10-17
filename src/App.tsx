import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import TestScreen from './screens/TestScreen';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/test" component={TestScreen} />
        <Route exact={true} path="/dashboard" component={Dashboard} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
