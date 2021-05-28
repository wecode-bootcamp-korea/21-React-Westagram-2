import React from 'react';
import CommonNav from '../../../Components/Nav/Nav';
import './Main.scss';

class MainMi extends React.Component {
  render() {
    return (
      <div className="MainMi">
        <CommonNav />
        {/*
        <nav>
          <div>
            <h1 className="logo">Westagram</h1>
            <div className="search">
              <label className="searchLabel">
                <i className="fas fa-search"></i>
                <span className="searchLabelText">Search</span>
              </label>
              <input className="searchInput" type="text" />
              <button className="searchDeleteButton">
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
            <div className="navIcons">
              <img
                src="/images/miyoungshin/main/icon/home_black.png"
                alt="home icon"
              />
              <img
                src="/images/miyoungshin/main/icon/send.png"
                alt="send icon"
              />
              <img
                src="/images/miyoungshin/main/icon/compass.png"
                alt="compass icon"
              />
              <img
                src="/images/miyoungshin/main/icon/heart.png"
                alt="heart icon"
              />
              <img
                className="myProfile-img"
                src="/images/miyoungshin/main/profile/my-profile.jpeg"
                alt="my profile"
              />
            </div>
          </div>
        </nav>
        */}
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
                      <li>
                        <span class="commentId">ninini </span>
                        <span class="commentText">예쁘다!</span>
                        <button class="commentDeleteButton">delete</button>
                        <button>
                          <img
                            class="commentLikesButton"
                            src="/images/miyoungshin/main/icon/heart.png"
                            alt="heart icon"
                          />
                        </button>
                      </li>
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
                  />
                  <button id="postButton" disabled="disabled">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </article>
          <aside>
            <div className="myAccount">
              <img
                src="/images/miyoungshin/main/profile/my-profile.jpeg"
                alt="my profile"
              />
              <div className="myAccount-id">my_sshin</div>
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
