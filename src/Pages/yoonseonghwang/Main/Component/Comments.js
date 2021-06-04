import { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <>
        <li key={this.props.key}>
          <div className="commentBox">
            <div className="commentPrint">
              <span className="userId">{this.props.name}</span>
              <span>{this.props.comment}</span>
            </div>

            <div className="commBtn">
              <button className="like">
                <i className="fas fa-heart commentVerEmpty" />
              </button>
              <button className="delComm" onClick={this.handleDelte}>
                X
              </button>
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Comments;
