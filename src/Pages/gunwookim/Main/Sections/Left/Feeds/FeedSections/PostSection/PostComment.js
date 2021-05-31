import React from 'react';

import ImgLink from '../../../../../../../../Components/gunwookim/ImgLink';

import './Post.scss';

class PostComment extends React.Component {
  render() {
    const { content, handleInput, addCommentList } = this.props;

    return (
      <div className="PostComment">
        <div className="fixed">
          <ImgLink src="/images/gunwookim/smile.png" alt="smile" to="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="댓글 입력..."
            name="content"
            onChange={handleInput}
            onKeyPress={handleInput}
            value={content}
          />
        </div>
        <div className="fixed">
          <button onClick={addCommentList}>게시</button>
        </div>
      </div>
    );
  }
}

export default PostComment;
