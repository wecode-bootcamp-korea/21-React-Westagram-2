import { Component } from 'react';
import Comment from './Comment';
import Comments from './Comments';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
      disabled: true,
      likeValid: [],
      btnClassName: 'fas fa-heart empty',
    };
  }

  handleComment = event => {
    this.setState(
      {
        comment: event.target.value,
      },
      this.handleValid
    );
  };

  handleValid = () => {
    this.state.comment.length >= 1
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  };

  handleCommentPrint = event => {
    event.preventDefault();
    this.setState({
      commentList: this.state.commentList.concat(this.state.comment),
      disabled: true,
      comment: '',
    });
  };

  likeBtnValid = () => {
    !this.state.likeValid === true
      ? this.setState({ likeValid: true, btnClassName: 'fas fa-heart fill' })
      : this.setState({ likeValid: false, btnClassName: 'fas fa-heart empty' });
  };

  render() {
    console.log(this.state.comment);
    const { feedSrc, likeCount, commentsList } = this.props;
    return (
      <article className="feed">
        <div className="contentsContainer">
          <div className="postAuthor">
            <img src="/images/yoonseonghwang/feed/kim.jpg" alt="my profile" />
            <span>kjaina_6x</span>
          </div>
          <div className="showingBox">
            <div className="contents">
              <img src={feedSrc} alt="feedimg" />
            </div>

            <div className="activeContainer">
              <div className="comunicateBar">
                <div className="cBarLeft">
                  <button className="like" onClick={this.likeBtnValid}>
                    <i className={this.state.btnClassName} />
                  </button>
                  <button>
                    <img
                      src="/images/yoonseonghwang/comment/comment.png"
                      alt="comment"
                    />
                  </button>
                  <button>
                    <img
                      src="/images/yoonseonghwang/comment/dm.png"
                      alt="message"
                    />
                  </button>
                </div>
                <div className="cBarRight">
                  <button>
                    <img
                      src="/images/yoonseonghwang/comment/bookmark.png"
                      alt="save this feed"
                    />
                  </button>
                </div>
              </div>

              <div className="countingBox">
                좋아요 <span>{likeCount}</span> 개
              </div>
            </div>

            <div className="commentContainer">
              <ul>
                {commentsList.map(comment => {
                  return (
                    <Comments
                      key={comment.id}
                      name={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
                <Comment commentList={this.state.commentList} />
              </ul>
            </div>

            <form className="inputBox" onSubmit={this.handleCommentPrint}>
              <input
                type="text"
                placeholder="댓글 달기..."
                className="inputComment"
                id="inputComment"
                value={this.state.comment}
                onChange={this.handleComment}
              />
              <button
                type="submit"
                className="commentButton"
                id="commentButton"
                onClick={this.handleCommentPrint}
                disabled={this.state.disabled}
              >
                게시
              </button>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
