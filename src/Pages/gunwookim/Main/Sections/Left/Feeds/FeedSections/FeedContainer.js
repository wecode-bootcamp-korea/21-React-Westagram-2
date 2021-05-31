import React from 'react';

import PostImg from './PostSection/PostImg';
import PostSubList from './PostSection/PostSubList';
import PostComment from './PostSection/PostComment';
import PostContent from './PostSection/PostContent';

import '../Feed.scss';

class FeedContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  addCommentList = comment => {
    this.setState(prev => ({
      commentList: [...prev.commentList, comment],
    }));
  };

  render() {
    const { commentList } = this.state;

    return (
      <div className="FeedContainer">
        <PostImg />
        <PostSubList />
        <PostContent commentList={commentList} />
        <PostComment addCommentList={this.addCommentList} />
      </div>
    );
  }
}

export default FeedContainer;
