import React from 'react';
import { INFO } from '../../footerData.js';
import ProfileBox from './ProfileBox/ProfileBox';

export default class MainRight extends React.Component {
  constructor() {
    super();
    this.state = {
      storyProfileList: [],
      recommendProfileList: [],
    };
  }

  componentDidMount() {
    fetch('/data/jiminkim/profileData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyProfileList: data.story_list,
          recommendProfileList: data.recommend,
        });
      });
  }

  render() {
    return (
      <div className="mainRight">
        <header>
          <div className="profile-box">
            <img src="/images/jiminkim/profile_img.jpeg" alt="프로필 사진" />
          </div>
          <div className="profile-box-desc">
            <div className="bold">jiminkim</div>
            <div className="gray">Wecode 21기 김지민입니다</div>
          </div>
        </header>

        <ProfileBox
          profileList={this.state.storyProfileList}
          className="main-right-friend-box"
          boxName="스토리"
          isMore={true}
          isLive={true}
        />

        <ProfileBox
          profileList={this.state.recommendProfileList}
          className="main-right-friend-box"
          boxName="회원님을 위한 추천"
          isMore={true}
          isLive={false}
        />

        <footer>
          <ul>
            {INFO.map(item => (
              <li key={item.id}>{item.item}</li>
            ))}
          </ul>
          <span className="copylight">@ 2021 WESTAGRAM</span>
        </footer>
      </div>
    );
  }
}
