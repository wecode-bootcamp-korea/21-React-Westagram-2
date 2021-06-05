import React from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      inputValue: '',
    };
  }

  // 댓글 조회
  componentDidMount() {
    this.setState({
      commentsList: this.props.commentsList,
    });
  }

  // 댓글 Input 입력 Event
  setCommentInput = event => {
    const { key, target } = event;

    // 댓글 입력이 없을 경우 return
    if (target.value.trim() === '') return;

    if (key === 'Enter') {
      this.appendComment();
      return;
    }
    this.setState({
      inputValue: target.value,
    });
  };

  // 댓글 추가 Event
  appendComment = () => {
    this.setState({
      commentsList: [
        ...this.state.commentsList,
        {
          no: this.state.commentsList.length + 1,
          nickname: 'nickname',
          comment: this.state.inputValue,
        },
      ],
      inputValue: '',
    });
  };

  // 댓글 삭제 Event
  deleteComment = commentNo => {
    this.setState({
      commentsList: this.state.commentsList.filter(
        comment => comment.no !== commentNo
      ),
    });
  };

  // 댓글 좋아요
  handleCommentHeart = commentNo => {
    this.setState({
      commentsList: this.state.commentsList.map(comment => {
        return comment.no !== commentNo
          ? comment
          : { ...comment, isHeart: !comment.isHeart };
      }),
    });
  };

  render() {
    const { feedTime } = this.props;
    return (
      <div class="comments">
        <CommentList
          commentsList={this.state.commentsList}
          handleCommentHeart={this.handleCommentHeart}
          deleteComment={this.deleteComment}
        />
        <div className="feeds-date">
          <span className="gray">{feedTime}</span>
        </div>
        <CommentInput
          inputValue={this.state.inputValue}
          setCommentInput={this.setCommentInput}
          appendComment={this.appendComment}
        />
      </div>
    );
  }
}

export default Comments;
