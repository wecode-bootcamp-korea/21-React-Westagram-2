import React, { Component } from 'react';
import CommentList from './CommentList';
import COMMENT from '../Data/CommentData';
import REACTION from '../Data/FeedReactionData';

class HandleFeed extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      commentValue: '',
      isPostActive: false,
      userId: 'wecode',
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
      e.key === 'Enter'
        ? this.addComment()
        : this.setState({ isPostActive: true });
    } else {
      this.setState({ isPostActive: false });
    }
  };

  addComment = () => {
    const { commentsList, commentValue, userId } = this.state;
    this.setState({
      commentsList: [
        ...commentsList,
        {
          id: commentsList.length + 1,
          userName: userId,
          content: commentValue,
        },
      ],
      commentValue: '',
      isPostActive: false,
    });
  };

  render() {
    const { feed } = this.props;
    return feed.map(feed => {
      return (
        <div className="feeds" key={feed.id}>
          <div className="feedHead">
            <div className="account">
              <img src={feed.profile} alt="my profile" />
              <div>{feed.userName}</div>
            </div>
            <div className="accountMore">・・・</div>
          </div>
          <div className="feedBody">
            <img className="feedPicture" src={feed.picture} alt="feed" />
            <div className="feedReaction">
              {REACTION.map(el => {
                return (
                  <img
                    key={el.id}
                    className={el.className}
                    src={el.url}
                    alt={el.alt}
                  />
                );
              })}
            </div>
            <div className="feedInfo">
              <div className="feedLikes">{feed.likes} likes</div>
              <div className="feedContents">
                <span className="myAccountId">{feed.userName} </span>
                {feed.content}
              </div>
              <div className="feedCommentsList">
                <ul>
                  {this.state.commentsList.length > 0 && (
                    <CommentList list={this.state.commentsList} />
                  )}
                </ul>
              </div>
              <div className="feedDate">{feed.date} AGO</div>
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

export default HandleFeed;
