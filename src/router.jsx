import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyles from '../src/global/styles/global';
import { history } from './services/history';

export default function pages() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <GlobalStyles />
    </Router>
  );
}
