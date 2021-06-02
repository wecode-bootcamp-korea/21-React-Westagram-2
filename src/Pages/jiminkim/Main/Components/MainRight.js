import React from 'react';
import { INFO } from '../../footerData.js';

export default class MainRight extends React.Component {
  render() {
    return (
      <div className="mainRight">
        <header>
          <div className="profile-box">
            <img src="/images/jiminkim/profile_img.jpeg" alt="프로필 사진" />
          </div>
          <div className="profile-box-desc">
            <div className="bold">jemizem</div>
            <div className="gray">Wecode 21기 김지민입니다</div>
          </div>
        </header>

        <div className="main-right-story-box">
          <h3>스토리</h3>
          <div className="all_view gray">모두 보기</div>
          <ul>
            <li>
              <div className="profile-box live-view">
                <img
                  src="https://picsum.photos/200"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">_yum_s</div>
                <div className="gray">방금 전</div>
              </div>
            </li>

            <li>
              <div className="profile-box live-view">
                <img
                  src="https://picsum.photos/300"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">coffee_holic</div>
                <div className="gray">16분 전</div>
              </div>
            </li>

            <li>
              <div className="profile-box live-view">
                <img
                  src="https://picsum.photos/400"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">bg_yuyu</div>
                <div className="gray">3시간 전</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="main-right-friend-box">
          <h3>회원님을 위한 추천</h3>
          <div className="all_view gray">모두 보기</div>
          <ul>
            <li>
              <div className="profile-box">
                <img
                  src="https://picsum.photos/250"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">i_wish_friend</div>
                <div className="gray">Westagram 신규가입</div>
              </div>
            </li>

            <li>
              <div className="profile-box">
                <img
                  src="https://picsum.photos/260"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">study_funfun</div>
                <div className="gray">_wecode님이 팔로우합니다.</div>
              </div>
            </li>
            <li>
              <div className="profile-box">
                <img
                  src="https://picsum.photos/270"
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">_mongmoung_good</div>
                <div className="gray">i_love_cookie님이 팔로우합니다.</div>
              </div>
            </li>
          </ul>
        </div>
        <footer>
          <ul>
            {INFO.map(item => {
              return <li key={item.id}>{item.item}</li>;
            })}
          </ul>
          <span className="copylight">@ 2021 WESTAGRAM</span>
        </footer>
      </div>
    );
  }
}
