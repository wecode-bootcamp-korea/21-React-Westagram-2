import React from 'react';

import PostImg from './PostSection/PostImg';
import PostSubList from './PostSection/PostSubList';
import PostComment from './PostSection/PostComment';
import PostContent from './PostSection/PostContent';

import '../Feed.scss';

import COMMENT from './commentData';

class FeedContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      // commentList: COMMENT,
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/gunwookimData/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(commentList => {
        this.setState({
          commentList,
        });
      });
  }

  addCommentList = () => {
    let { content } = this.state;
    if (content.trim() === '') return;

    this.setState(prev => ({
      commentList: [
        ...prev.commentList,
        {
          id: prev.commentList.length + 1,
          content,
        },
      ],
      content: '',
    }));
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    if (e.key === 'Enter') this.addCommentList();
  };

  render() {
    const { content, commentList } = this.state;

    return (
      <div className="FeedContainer">
        <PostImg />
        <PostSubList />
        <PostContent commentList={commentList} />
        <PostComment
          content={content}
          handleInput={this.handleInput}
          addCommentList={this.addCommentList}
        />
      </div>
    );
  }
}

export default FeedContainer;
