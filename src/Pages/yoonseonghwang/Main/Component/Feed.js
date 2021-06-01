import { Component } from 'react';
import Comment from './Comment';
import Comments from './Comments';

class Feed extends Component {
  render() {
    return (
      <article className="feed">
        <div className="contentsContainer">
          <div className="postAuthor">
            <img src="/images/yoonseonghwang/feed/kim.jpg" alt="my profile" />
            <span>kjaina_6x</span>
          </div>
          <div className="showingBox">
            <div className="contents">
              <img src={this.props.feedSrc} alt="feedimg" />
            </div>

            <div className="activeContainer">
              <div className="comunicateBar">
                <div className="cBarLeft">
                  <button className="like">
                    <img
                      src="/images/yoonseonghwang/comment/heart.png"
                      alt="like"
                    />
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
                좋아요 <span>43</span> 개
              </div>
            </div>

            <div className="commentContainer">
              <ul>
                {this.props.commentsList.map(comment => {
                  return (
                    <Comments
                      key={comment.id}
                      name={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
                {this.props.commentList.map((x, idx) => {
                  return <Comment text={x} key={idx} />;
                })}
              </ul>
            </div>

            <div className="inputBox">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="inputComment"
                id="inputComment"
                value={this.props.comment}
                onChange={this.props.handleComment}
              />
              <button
                type="submit"
                className="commentButton"
                id="commentButton"
                onClick={this.props.handleCommentPrint}
                disabled={this.props.disabled}
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
