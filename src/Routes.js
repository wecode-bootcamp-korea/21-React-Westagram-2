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
          <Route export path="/gunwookim/login" componet={LoginGun} />
          <Route export path="/jiminkim/login" componet={LoginMin} />
          <Route export path="/miyoungshin/login" componet={LoginMi} />
          <Route export path="/yoonseonghwang/login" componet={LoginYoon} />
          <Route export path="/gunwookim/main" componet={MainGun} />
          <Route export path="/jiminkim/main" componet={MainMin} />
          <Route export path="/miyoungshin/main" componet={MainMi} />
          <Route export path="/yoonseonghwang/main" componet={MainYoon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
