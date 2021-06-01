import { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.commentList.map((comment, idx) => (
          <li key={idx}>
            <div className="commentBox">
              <div className="commentPrint">
                <span className="userId">yoon_in_verse</span>
                <span>{comment}</span>
              </div>

              <div className="commBtn">
                <button className="like">♥️</button>
                <button className="delComm">X</button>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default Comment;
