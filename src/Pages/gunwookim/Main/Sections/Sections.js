import React from 'react';

import './Sections.scss';

import LeftSection from './Left/LeftSection';

class Sections extends React.Component {
  render() {
    return (
      <div className="Sections">
        <LeftSection />
      </div>
    );
  }
}

export default Sections;
