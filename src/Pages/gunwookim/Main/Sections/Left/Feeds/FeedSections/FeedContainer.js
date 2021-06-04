import React from 'react';

import PostImg from './PostSection/PostImg';
import PostSubList from './PostSection/PostSubList';
import PostComment from './PostSection/PostComment';
import PostContent from './PostSection/PostContent';

import '../Feed.scss';

class FeedContainer extends React.Component {
  render() {
    const {
      feed,
      handleInput,
      addCommentList,
      content,
      commentDelete,
      commentTureOrFalse,
      modalEvent,
    } = this.props;

    return (
      <div className="FeedContainer">
        <PostImg postImg={feed.postImg} />
        <PostSubList />
        <PostContent
          postId={feed.postId}
          commentList={feed.commentList}
          commentDelete={commentDelete}
          feed={feed}
          postcontent={feed.postcontent}
          commentTureOrFalse={commentTureOrFalse}
          modalEvent={modalEvent}
        />
        <PostComment
          postId={feed.postId}
          content={content}
          handleInput={handleInput}
          addCommentList={addCommentList}
        />
      </div>
    );
  }
}

export default FeedContainer;