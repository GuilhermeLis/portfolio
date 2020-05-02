import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import { history } from './services/history';

export default function pages() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
