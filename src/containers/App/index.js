import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import SearchScreen from 'screens/Search';
import Profile from 'screens/Profile';
import MainLayout from 'screens/Main';

import 'css/global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <MainLayout exact={true} path="/search" component={SearchScreen} />
        <MainLayout exact={true} path="/:username" component={Profile} />
        <Redirect to="/search" />
      </Switch>
    </Router>
  );
}
