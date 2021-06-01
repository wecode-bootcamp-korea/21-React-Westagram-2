import React from 'react';

import PostImg from './PostSection/PostImg';
import PostSubList from './PostSection/PostSubList';
import PostComment from './PostSection/PostComment';
import PostContent from './PostSection/PostContent';

import '../Feed.scss';

class FeedContainer extends React.Component {
  render() {
    const { feed, handleInput, addCommentList } = this.props;

    return (
      <div className="FeedContainer">
        <PostImg postImg={feed.postImg} />
        <PostSubList />
        <PostContent
          commentList={feed.commentList}
          postcontent={feed.postcontent}
        />
        <PostComment
          content={feed.content}
          handleInput={handleInput}
          addCommentList={addCommentList}
        />
      </div>
    );
  }
}

export default FeedContainer;
