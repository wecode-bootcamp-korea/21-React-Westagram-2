import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
import Feed from './Component/Feed';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedSrc: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedSrc: data,
        });
      });
  }

  render() {
    return (
      <div className="mainPage1">
        <Nav />

        <main>
          <div className="feeds">
            {this.state.feedSrc.map(content => {
              return (
                <Feed
                  feedSrc={content.img}
                  likeCount={content.likeCount}
                  commentsList={content.contentsWrap}
                />
              );
            })}
          </div>

          <section className="recContainer">
            <div className="recMyProfile">
              <div className="myProfCon">
                <img
                  src="/images/yoonseonghwang/feed/myprofile.jpg"
                  alt="myProfile"
                />
                <div className="nameArea">
                  <span className="myId">yoon_in_verse</span>
                  <span className="name">황윤성</span>
                </div>
              </div>
              <span className="accountChange">전환</span>
            </div>
            <div className="menuTitle">
              <span className="subTitle">회원님을 위한 추천</span>
              <span className="more">모두 보기</span>
            </div>
            <ul className="recommendList">
              <li>
                <div className="recommendProfile">
                  <img
                    className="imgProfile"
                    src="/images/yoonseonghwang/story/raonlee.jpg"
                    alt="raonlee님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="user_id">raonlee</span>
                    <span className="sub_span">
                      radmole님 외 11명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommendProfile">
                  <img
                    className="imgProfile"
                    src="/images/yoonseonghwang/story/jmin.jpg"
                    alt="raonlee님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="user_id">shift_j__min2</span>
                    <span className="sub_span">
                      lejh066259님 외 3명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommendProfile">
                  <img
                    className="imgProfile"
                    src="/images/yoonseonghwang/story/chaeyun.jpg"
                    alt="eunbvy님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="user_id">eunbvy</span>
                    <span className="sub_span">회원님을 위한 추천</span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommendProfile">
                  <img
                    className="imgProfile"
                    src="/images/yoonseonghwang/story/junki.jpg"
                    alt="jun_kiiiii님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="user_id">jun_kiiiii</span>
                    <span className="sub_span">
                      dr.brrrrrrr님 외 4명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
