import React from 'react';
import Feed from './Feed';
import Comments from './Comments/Comments';
import FeedLikeModal from './FeedLikeModal';

export default class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
      isOpenFeedLikeModal: false,
      feedLikeList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/jiminkim/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data.feeds,
        });
      });
  }

  onChangeFeedLike = feedId => {
    this.setState({
      feeds: this.state.feeds.map(feed => {
        return feed.id !== feedId ? feed : { ...feed, isLike: !feed.isLike };
      }),
    });
  };

  openFeedLikeModal = () => {
    this.setState({ isOpenFeedLikeModal: true });
  };

  closeFeedLikeModal = () => {
    this.setState({ isOpenFeedLikeModal: false });
  };

  setFeedLikeListForModal = list => {
    console.log(list);
    this.setState({ feedLikeList: list });
  };

  render() {
    const { feeds } = this.state;

    return (
      <div className="feeds">
        {feeds.map(feed => (
          <article key={feed.id}>
            <Feed
              feedId={feed.id}
              feedWriter={feed.writer}
              feedPicture={feed.img}
              feedContent={feed.content}
              feedLikePeeple={feed.likes}
              feedTime={feed.times}
              isLike={feed.isLike}
              onChangeFeedLike={this.onChangeFeedLike}
              setFeedLikeListForModal={this.setFeedLikeListForModal}
              openFeedLikeModal={this.openFeedLikeModal}
            />
            <Comments
              feedId={feed.id}
              feedTime={feed.times}
              commentsList={feed.commentsList}
            />
          </article>
        ))}
        <FeedLikeModal
          likeList={this.state.feedLikeList}
          isOpen={this.state.isOpenFeedLikeModal}
          closeModal={this.closeFeedLikeModal}
        />
        <button onClick={this.openFeedLikeModal}> 모달팝업</button>
      </div>
    );
  }
}
