import React from 'react';

export default class CommentsList extends React.Component {
  render() {
    const { commentsList, deleteComment, handleCommentHeart } = this.props;

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
                    onClick={() => deleteComment(comment.no)}
                  >
                    ✖️
                  </button>
                  <button
                    className="comment-heart-button"
                    onClick={() => handleCommentHeart(comment.no)}
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
