import { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <>
        <li>
          <div className="commentBox">
            <div className="commentPrint">
              <span className="userId">yoon_in_verse</span>
              <span>{this.props.text}</span>
            </div>

            <div className="commBtn">
              <button className="like">♥️</button>
              <button className="delComm">X</button>
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Comment;
