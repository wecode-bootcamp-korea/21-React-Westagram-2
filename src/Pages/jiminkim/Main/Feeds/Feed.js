import React, { Fragment } from 'react';
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
} from '../../../../Components/SVG/SVG';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      isViewMoreContent: false,
    };
  }

  setViewMoreContent = () => {
    this.setState({
      isViewMorecontent: !this.state.isViewMoreContent,
    });
  };

  openFeedLikeModalBefore = () => {
    this.props.setFeedLikeListForModal(this.props.feedLikePeeple);
    this.props.openFeedLikeModal();
  };

  render() {
    const {
      feedId,
      feedWriter,
      feedPicture,
      feedContent,
      feedLikePeeple,
      isLike,
      onChangeFeedLike,
    } = this.props;

    const isMoreContent = ~feedContent.indexOf('\n') ? true : false;

    return (
      <>
        <header>
          <div className="profile-box">
            <img src="/images/jiminkim/profile_img.jpeg" alt="프로필 사진" />
          </div>
          <div className="profile-box-desc bold">{feedWriter}</div>
        </header>
        <div className="feeds-picture">
          <img alt="main images" src={feedPicture} />
        </div>
        <div className="feeds-navigation">
          <ul className="list-style-none">
            <li className="icon">
              <HeartIcon
                isFill={isLike}
                onClick={() => onChangeFeedLike(feedId)}
              />
            </li>
            <li className="icon">
              <CommentIcon />
            </li>
            <li className="icon">
              <ShareIcon />
            </li>
          </ul>
          <ul className="list-style-none">
            <li className="icon">
              <BookmarkIcon />
            </li>
          </ul>
        </div>
        {feedLikePeeple.length > 0 && (
          <div className="feeds-likes">
            <div className="profile-box small">
              <img src="/images/jiminkim/profile_img.jpeg" alt="프로필 사진" />
            </div>
            <>
              <span className="profile-box-desc bold">
                {feedLikePeeple[0].id}
              </span>
              님 외&nbsp;
              <span
                class="bold like-count"
                onClick={this.openFeedLikeModalBefore}
              >
                {feedLikePeeple.length}
              </span>
              명이 좋아합니다.
            </>
          </div>
        )}
        <div className="feeds-content">
          <span className="bold">{feedWriter}</span>
          {isMoreContent ? (
            this.state.isViewMorecontent ? (
              feedContent.split('\n').map((line, i) => (
                <Fragment key={i}>
                  {line}
                  <br />
                </Fragment>
              ))
            ) : (
              <>
                {feedContent.split('\n')[0]}...
                <span className="gray more" onClick={this.setViewMoreContent}>
                  더 보기
                </span>
              </>
            )
          ) : (
            feedContent
          )}
        </div>
      </>
    );
  }
}

export default Feed;
