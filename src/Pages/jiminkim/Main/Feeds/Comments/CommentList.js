import React from 'react';

export default class CommentsList extends React.Component {
  render() {
    const { feedId, commentsList, deleteComment, handleCommentHeart } =
      this.props;

    return (
      <>
        <div className="feeds-comment-list">
          <ul className="list-style-none">
            {commentsList?.map((comment, no) => (
              <li key={no}>
                <span className="nickname bold">{comment.nickname}</span>
                <span className="comment">{comment.comment}</span>
                <div className="button-list">
                  <button
                    className="comment-delete-button"
                    id={comment.no}
                    onClick={e => deleteComment(e)}
                  >
                    ✖️
                  </button>
                  <button
                    className="comment-heart-button"
                    id={comment.no}
                    onClick={e => handleCommentHeart(e)}
                  >
                    {comment.isHeart ? '👍' : '👎'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
