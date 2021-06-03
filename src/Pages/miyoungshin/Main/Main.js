import React from 'react';
import CommonNav from '../../../Components/Nav/Nav';
import HandleFeed from './Component/FeedList';
import FEED from './Data/FeedData';
import './Main.scss';

class MainMi extends React.Component {
  constructor() {
    super();
    this.state = {
      feedsList: [],
    };
  }

  componentDidMount() {
    this.setState({
      feedsList: FEED,
    });
  }

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
            {this.state.feedsList.length > 0 && (
              <HandleFeed feed={this.state.feedsList} />
            )}
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
