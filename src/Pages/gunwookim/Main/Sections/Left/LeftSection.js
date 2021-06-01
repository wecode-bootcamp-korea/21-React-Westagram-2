import React from 'react';

import '../Sections.scss';

import Feeds from './Feeds/Feeds';

class LeftSection extends React.Component {
  state = {
    content: '',
    feedList: [],
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    if (e.key === 'Enter') this.addFeedList();
  };

  addFeedList = () => {
    let { content } = this.state;
    if (content.trim() === '') return;

    this.setState({});
  };

  componentDidMount() {
    fetch('http://localhost:3000/gunwookimData/feedsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedList => {
        this.setState({
          feedList,
        });
      });
  }

  render() {
    const { feedList } = this.state;

    return (
      <div className="LeftSection">
        {feedList.map(feed => (
          <Feeds
            key={feed.postId}
            feed={feed}
            handleInput={this.handleInput}
            addCommentList={this.addCommentList}
          />
        ))}
      </div>
    );
  }
}

export default LeftSection;
