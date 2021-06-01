import React from 'react';
import CommonNav from '../../../Components/Nav/Nav';
import CommentList from './CommentList';
import COMMENT from './Data/CommentData';
import REACTION from './Data/FeedReactionData';
import './Main.scss';

class MainMi extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      feedsList: [],
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
    const { value } = e.target;
    this.setState({
      commentValue: value,
    });
  };

  postButtonChange = e => {
    const { commentValue } = this.state;
    if (commentValue !== '') {
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
    return (
      <div className="MainMi">
        <CommonNav />
        <section className="mainSection">
          <article>
            <div className="stories">
              <div class="story">
                <div class="storyBg">
                  <img
                    class="storyProfile"
                    src="/images/miyoungshin/main/profile/dlwlrma-profile.jpeg"
                    alt="dlwlrma profile"
                  />
                </div>
                <div class="storyId">dlwlrma</div>
              </div>
            </div>
            <div className="feeds">
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
                  src="/images/miyoungshin/main/feed/my_sshin-feed-image.JPG"
                  alt="feed"
                />
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
                    onClick={
                      this.state.isPostActive ? this.addComment : undefined
                    }
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </article>
          <aside>
            <div className="myAccount">
              <img src="/images/common/wecode-profile.jpeg" alt="my profile" />
              <div className="myAccount-id">wecode</div>
              <button className="sideButton">Swicth</button>
            </div>
            <div className="suggestions">
              <div className="suggestionTitle">
                <div>Suggestions For You</div>
                <button>See All</button>
              </div>
              <div className="suggestedLists">
                <div class="suggestedUser">
                  <img
                    src="/images/miyoungshin/main/profile/jparkitrighthere-profile.jpeg"
                    alt="suggested User's profile"
                  />
                  <div>
                    <div class="suggestedId">jparkitrighthere</div>
                    <div class="suggestedText">Suggested for you</div>
                  </div>
                  <button class="sideButton">Follow</button>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    );
  }
}

export default MainMi;
