import React from 'react';
import Feed from './Feed';
import Comments from './Comments/Comments';

export default class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
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
              feedTime={feed.times}
              isLike={feed.isLike}
              onChangeFeedLike={this.onChangeFeedLike}
            />
            <Comments
              feedId={feed.id}
              feedTime={feed.times}
              commentsList={feed.commentsList}
            />
          </article>
        ))}
      </div>
    );
  }
}
