import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginGun from './Pages/gunwookim/Login/Login';
import LoginMin from './Pages/jiminkim/Login/Login';
import LoginMi from './Pages/miyoungshin/Login/Login';
import LoginYoon from './Pages/yoonseonghwang/Login/Login';
import MainGun from './Pages/gunwookim/Main/Main';
import MainMin from './Pages/jiminkim/Main/Main';
import MainMi from './Pages/miyoungshin/Main/Main';
import MainYoon from './Pages/yoonseonghwang/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route export path="/gunwookim/login" component={LoginGun} />
          <Route export path="/jiminkim/login" component={LoginMin} />
          <Route export path="/miyoungshin/login" component={LoginMi} />
          <Route export path="/yoonseonghwang/login" component={LoginYoon} />
          <Route export path="/gunwookim/main" component={MainGun} />
          <Route export path="/jiminkim/main" component={MainMin} />
          <Route export path="/miyoungshin/main" component={MainMi} />
          <Route export path="/yoonseonghwang/main" component={MainYoon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
