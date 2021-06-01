import React, { Component } from 'react';
import CommentList from './CommentList';
import COMMENT from './CommentData';

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      commentValue: '',
      isPostActive: false,
    };
  }

  componentDidMount() {
    this.setState({
      commentsList: COMMENT,
    });
  }

  inputChange = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  postButtonChange = e => {
    if (this.state.commentValue !== '') {
      if (e.key === 'Enter') {
        this.addComment();
      } else {
        this.setState({
          isPostActive: true,
        });
      }
    } else {
      this.setState({
        isPostActive: false,
      });
    }
  };

  addComment = () => {
    const { commentsList, commentValue } = this.state;
    this.setState({
      commentsList: [
        ...commentsList,
        {
          id: commentsList.length + 1,
          userName: 'wecode',
          content: commentValue,
        },
      ],
      commentValue: '',
    });
  };

  render() {
    const { list } = this.props;
    return list.map(feed => {
      return (
        <div className="feeds" key={feed.id}>
          <div className="feedHead">
            <div className="account">
              <img
                src="/images/miyoungshin/main/profile/my-profile.jpeg"
                alt="my profile"
              />
              <div>my_sshin</div>
            </div>
            <div className="accountMore">・・・</div>
          </div>
          <div className="feedBody">
            <img
              className="feedPicture"
              src="/images/miyoungshin/main/feed-image.JPG"
              alt="feed"
            />
            <div className="feedReaction">
              <img
                className="floatLeft"
                src="/images/miyoungshin/main/icon/heart.png"
                alt="heart icon"
              />
              <img
                className="floatLeft"
                src="/images/miyoungshin/main/icon/chat.png"
                alt="chat icon"
              />
              <img
                className="floatLeft"
                src="/images/miyoungshin/main/icon/send.png"
                alt="send icon"
              />
              <img
                className="floatRight"
                src="/images/miyoungshin/main/icon/bookmark_white.png"
                alt="bookmark icon"
              />
            </div>
            <div className="feedInfo">
              <div className="feedLikes">15 likes</div>
              <div className="feedContents">
                <span className="myAccountId">my_sshin</span> 그림같은 카페
              </div>
              <div className="feedCommentsList">
                <ul>
                  {this.state.commentsList.length > 0 && (
                    <CommentList list={this.state.commentsList} />
                  )}
                </ul>
              </div>
              <div className="feedDate">42 MINUTES AGO</div>
            </div>
            <div className="feedComment">
              <img
                src="/images/miyoungshin/main/icon/smile.png"
                alt="emoticon button"
              />
              <input
                id="commentInput"
                type="text"
                placeholder="Add a comment..."
                value={this.state.commentValue}
                onChange={this.inputChange}
                onKeyUp={this.postButtonChange}
              />
              <button
                id="postButton"
                className={this.state.isPostActive ? 'postButtonOn' : ''}
                onClick={this.state.isPostActive ? this.addComment : undefined}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default FeedList;
