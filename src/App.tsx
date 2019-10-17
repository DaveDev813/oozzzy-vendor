import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router';
import Home from './screens/Home';
import TestScreen from './screens/TestScreen';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/test" component={TestScreen} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
