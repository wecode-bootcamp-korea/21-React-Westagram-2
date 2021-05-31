import React from 'react';

import ImgLink from '../../../../../../../../Components/gunwookim/ImgLink';

import './Post.scss';

class PostComment extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    if (e.key === 'Enter') this.addCommentList();
  };

  addCommentList = () => {
    let comment = this.state.comment.trim();

    if (comment === '') return;

    this.props.addCommentList(comment);
    this.setState({
      comment: '',
    });
  };

  render() {
    // const { addCommentList } = this.props;
    const { comment } = this.state;

    return (
      <div className="PostComment">
        <div className="fixed">
          <ImgLink src="/images/gunwookim/smile.png" alt="smile" to="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="댓글 입력..."
            name="comment"
            onChange={this.handleInput}
            onKeyPress={this.handleInput}
            value={comment}
          />
        </div>
        <div className="fixed">
          <button onClick={this.addCommentList}>게시</button>
        </div>
      </div>
    );
  }
}

export default PostComment;
