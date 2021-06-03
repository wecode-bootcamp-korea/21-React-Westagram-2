import React from 'react';

import '../Sections.scss';

import Feeds from './Feeds/Feeds';
import Modal from '../../Modal';

class LeftSection extends React.Component {
  state = {
    content: [],
    feedList: [],
    modal: {},
    isModal: false,
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
  };

  commentDelete = (postId, id) => {
    const { feedList } = this.state;

    const list = feedList.map(feed => {
      if (feed.postId === postId) {
        const commentList = feed.commentList;
        const idx = commentList.findIndex(comment => comment.id === id);
        // delete commentList[idx];
        commentList.splice(idx, 1);
      }
      return feed;
    });

    this.setState({ feedList: list });
  };

  addCommentList = (e, postId, inputTest, test) => {
    e.preventDefault();
    const { feedList, content } = this.state;

    const inputValue = content.filter(c => c.postId === postId)[0].inputValue;

    if (inputValue.trim() === '') {
      return;
    }

    const contentList = content.map(c => {
      if (c.postId === postId) {
        c.inputValue = '';
      }
      return c;
    });

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

    this.setState({ feedList: list, content: contentList }, test);
  };

  onTest = feed => {
    console.log(feed);

    this.setState({
      modal: feed,
    });
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

  modalEvent = () => {
    const { isModal } = this.state;

    this.setState(
      {
        isModal: !isModal,
      },
      () => {
        document.body.style.overflow = isModal ? 'auto' : 'hidden';
      }
    );
  };

  render() {
    const { feedList, content, modal, isModal } = this.state;

    return (
      <div className="LeftSection">
        {isModal ? <Modal feed={modal} modalEvent={this.modalEvent} /> : ''}
        <button onClick={this.modalEvent}>Test</button>
        {feedList.map(feed => (
          <Feeds
            key={feed.postId}
            feed={feed}
            content={
              content.filter(c => c.postId === feed.postId)[0].inputValue
            }
            handleInput={this.handleInput}
            addCommentList={this.addCommentList}
            commentDelete={this.commentDelete}
            onTest={this.onTest}
          />
        ))}
      </div>
    );
  }
}

export default LeftSection;
