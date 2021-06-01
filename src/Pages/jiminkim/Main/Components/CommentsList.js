import React from 'react';

export default class CommentsList extends React.Component {
  render() {
    const { feedId, commentsList } = this.props;

    return (
      <>
        <div className="feeds-comment-list">
          <ul className="list-style-none">
            {commentsList.map((comment, no) => (
              <li key={no}>
                <span className="nickname bold">{comment.nickname}</span>
                <span className="comment">{comment.comment}</span>
                <div className="button-list">
                  <button
                    className="comment-delete-button"
                    onClick={() => {
                      this.props.deleteComment(feedId, no);
                    }}
                  >
                    ✖️
                  </button>
                  <button className="comment-heart-button">♡</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
