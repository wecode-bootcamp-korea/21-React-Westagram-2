import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    const { list } = this.props;
    return list.map(list => {
      return (
        <li key={list.id}>
          <span class="commentId">{list.userName}</span>
          <span class="commentText">{list.content}</span>
          <button class="commentDeleteButton">delete</button>
          <button>
            <img
              class="commentLikesButton"
              src="/images/miyoungshin/main/icon/heart.png"
              alt="heart icon"
            />
          </button>
        </li>
      );
    });
  }
}

export default CommentList;
