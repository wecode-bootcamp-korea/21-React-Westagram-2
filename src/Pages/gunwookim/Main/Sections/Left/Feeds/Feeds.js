import React from 'react';

import './Feed.scss';

import FeedHead from './FeedSections/FeedHead';
import FeedContainer from './FeedSections/FeedContainer';

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds">
        <FeedHead />
        <FeedContainer />
      </div>
    );
  }
}

export default Feeds;
