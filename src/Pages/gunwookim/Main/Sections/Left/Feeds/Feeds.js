import React from 'react';

import './Feed.scss';

import FeedHead from './FeedSections/FeedHead';
import FeedContainer from './FeedSections/FeedContainer';

class Feeds extends React.Component {
  render() {
    const {
      feed,
      handleInput,
      addCommentList,
      content,
      commentDelete,
      commentTureOrFalse,
      onTest,
      modalEvent,
    } = this.props;

    return (
      <div className="Feeds">
        <FeedHead feed={feed} />
        <FeedContainer
          feed={feed}
          content={content}
          handleInput={handleInput}
          addCommentList={addCommentList}
          commentDelete={commentDelete}
          commentTureOrFalse={commentTureOrFalse}
          onTest={onTest}
          modalEvent={modalEvent}
        />
      </div>
    );
  }
}

export default Feeds;
