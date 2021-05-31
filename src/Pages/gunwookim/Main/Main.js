import React from 'react';

import Nav from '../../../Components/Nav/Nav';
import Sections from './Sections/Sections';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Sections />
      </div>
    );
  }
}

export default Main;
