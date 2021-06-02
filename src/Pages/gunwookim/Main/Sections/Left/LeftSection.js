import React from 'react';

import '../Sections.scss';

import Feeds from './Feeds/Feeds';

class LeftSection extends React.Component {
  state = {
    content: [],
    feedList: [],
  };

  handleInput = (e, postId) => {
    const { value } = e.target;
    const { content } = this.state;

    this.setState({
      content: content.map(c => {
        if (c.postId === postId) {
          c.inputValue = value;
        }
        return c;
      }),
    });

    if (e.key === 'Enter') {
      this.addCommentList(postId);
    }
  };

  addCommentList = postId => {
    const { feedList, content } = this.state;

    const inputValue = content.filter(c => c.postId === postId)[0].inputValue;

    const list = feedList.map(feed => {
      if (feed.postId === postId) {
        feed.commentList = [
          ...feed.commentList,
          {
            id: feed.commentList.length + 1,
            content: inputValue,
          },
        ];
      }
      return feed;
    });

    const contentList = content.map(c => {
      if (c.postId === postId) {
        c.inputValue = '';
      }
      return c;
    });

    this.setState({ feedList: list, content: contentList });
  };

  componentDidMount() {
    fetch('http://localhost:3000/gunwookimData/feedsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedList => {
        const content = feedList.map(feed => {
          return {
            postId: feed.postId,
            inputValue: '',
          };
        });

        this.setState({
          feedList,
          content,
        });
      });
  }

  render() {
    const { feedList, content } = this.state;

    return (
      <div className="LeftSection">
        {feedList.map(feed => (
          <Feeds
            key={feed.postId}
            feed={feed}
            content={
              content.filter(c => c.postId === feed.postId)[0].inputValue
            }
            handleInput={this.handleInput}
            addCommentList={this.addCommentList}
          />
        ))}
      </div>
    );
  }
}

export default LeftSection;
