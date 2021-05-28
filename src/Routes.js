import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Style/Reset.css';

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
          <Route exact path="/gunwookim/login" component={LoginGun} />
          <Route exact path="/jiminkim/login" component={LoginMin} />
          <Route exact path="/miyoungshin/login" component={LoginMi} />
          <Route exact path="/yoonseonghwang/login" component={LoginYoon} />
          <Route exact path="/gunwookim/main" component={MainGun} />
          <Route exact path="/jiminkim/main" component={MainMin} />
          <Route exact path="/miyoungshin/main" component={MainMi} />
          <Route exact path="/yoonseonghwang/main" component={MainYoon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
