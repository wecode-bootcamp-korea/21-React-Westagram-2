import React from 'react';

import ImgLink from '../../../../../../../../Components/gunwookim/ImgLink';

import './Post.scss';

class PostComment extends React.Component {
  render() {
    const { content, handleInput, addCommentList, postId } = this.props;

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
            onChange={e => handleInput(e, postId)}
            onKeyPress={e => handleInput(e, postId)}
            value={content}
          />
        </div>
        <div className="fixed">
          <button onClick={() => addCommentList(postId)}>게시</button>
        </div>
      </div>
    );
  }
}

export default PostComment;
