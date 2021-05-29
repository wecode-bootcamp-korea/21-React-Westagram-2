import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="mainPage1">
        <Nav />

        <main>
          <div className="feeds">
            <article className="feed">
              <div className="contents_container">
                <div className="post_author">
                  <img
                    src="/images/yoonseonghwang/feed/myprofile.jpg"
                    alt="my profile"
                    className="author_profile"
                  />
                  <span>
                    <b>yoon_in_verse</b>
                  </span>
                </div>

                <div className="contents">
                  <img
                    src="/images/yoonseonghwang/feed/dogie.jpg"
                    alt="feeds"
                  />
                </div>

                <div className="active_container">
                  <div className="comunicate_bar">
                    <div className="c_bar_left">
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
                    <div className="c_bar_right">
                      <button>
                        <img
                          src="/images/yoonseonghwang/comment/bookmark.png"
                          alt="save this feed"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="counting_box">
                    좋아요 <span className="like_count">11</span> 개
                  </div>

                  <div className="comment_container">
                    <ul id="commentBox"></ul>
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="댓글 달기..."
                      className="input_comment"
                      id="inputComment"
                    />
                    <button
                      type="submit"
                      className="comment_button"
                      id="commentButton"
                    >
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <section className="rec_container">
            <div className="menu_title">
              <span className="sub_title">회원님을 위한 추천</span>
              <span className="more">모두 보기</span>
            </div>
            <ul className="recommend_list">
              <li>
                <div className="recommend_profile">
                  <img
                    className="img_profile"
                    src="/images/yoonseonghwang/story/raonlee.jpg"
                    alt="raonlee님의 프로필 사진"
                  />
                  <div className="profile_text">
                    <span className="user_id">raonlee</span>
                    <span className="sub_span">
                      radmole님 외 11명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommend_profile">
                  <img
                    className="img_profile"
                    src="/images/yoonseonghwang/story/jmin.jpg"
                    alt="raonlee님의 프로필 사진"
                  />
                  <div className="profile_text">
                    <span className="user_id">shift_j__min2</span>
                    <span className="sub_span">
                      lejh066259님 외 3명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommend_profile">
                  <img
                    className="img_profile"
                    src="/images/yoonseonghwang/story/chaeyun.jpg"
                    alt="eunbvy님의 프로필 사진"
                  />
                  <div className="profile_text">
                    <span className="user_id">eunbvy</span>
                    <span className="sub_span">회원님을 위한 추천</span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </li>
              <li>
                <div className="recommend_profile">
                  <img
                    className="img_profile"
                    src="/images/yoonseonghwang/story/junki.jpg"
                    alt="jun_kiiiii님의 프로필 사진"
                  />
                  <div className="profile_text">
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
