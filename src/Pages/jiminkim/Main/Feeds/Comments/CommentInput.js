import React from 'react';
import { SmileIcon } from '../../../../../Components/SVG/SVG';

class CommentInput extends React.Component {
  render() {
    const { inputValue, setCommentInput, appendComment } = this.props;
    return (
      <div className="feeds-comment">
        <div className="emoji">
          <SmileIcon />
        </div>
        <textarea
          placeholder="댓글 달기..."
          className="commentTextarea"
          value={inputValue}
          onChange={setCommentInput}
          onKeyUp={setCommentInput}
        ></textarea>
        <button
          type="submit"
          className={`commentButton ${inputValue === '' && 'inactive'}`}
          onClick={appendComment}
          disabled={inputValue === ''}
        >
          게시
        </button>
      </div>
    );
  }
}

export default CommentInput;
