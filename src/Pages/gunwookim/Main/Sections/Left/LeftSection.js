import React from 'react';

import '../Sections.scss';

import Feeds from './Feeds/Feeds';

class LeftSection extends React.Component {
  render() {
    return (
      <div className="LeftSection">
        <Feeds />
      </div>
    );
  }
}

export default LeftSection;
