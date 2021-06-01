import React from 'react';

import './Feed.scss';

import FeedHead from './FeedSections/FeedHead';
import FeedContainer from './FeedSections/FeedContainer';

class Feeds extends React.Component {
  render() {
    const { feed, handleInput, addCommentList } = this.props;

    return (
      <div className="Feeds">
        <FeedHead feed={feed} />
        <FeedContainer
          feed={feed}
          handleInput={handleInput}
          addCommentList={addCommentList}
        />
      </div>
    );
  }
}

export default Feeds;
