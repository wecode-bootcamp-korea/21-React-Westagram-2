import React from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsList: [],
      inputValue: '',
      isInsert: false,
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
    if (event.key === 'Enter') {
      if (event.target.value.replace(/(?:\r\n|\r|\n)/g, '') === '') return;
      this.appendComment();
      return;
    }
    this.setState({
      inputValue: event.target.value,
      isInsert: event.target.value !== '' ? true : false,
    });
  };

  // 댓글 추가 Event
  appendComment = () => {
    this.setState({
      commentsList: this.state.commentsList.concat({
        no: this.state.commentsList.length + 1,
        nickname: 'nickname',
        comment: this.state.inputValue,
        isHeart: false,
      }),
      inputValue: '',
      isInsert: false,
    });
  };

  // 댓글 삭제 Event
  deleteComment = e => {
    this.setState({
      commentsList: this.state.commentsList.filter(
        comment => comment.no !== parseInt(e.target.id)
      ),
    });
  };

  // 댓글 좋아요
  handleCommentHeart = e => {
    this.setState({
      commentsList: this.state.commentsList.map(comment => {
        return comment.no !== parseInt(e.target.id)
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
          isInsert={this.state.isInsert}
          setCommentInput={this.setCommentInput}
          appendComment={this.appendComment}
        />
      </div>
    );
  }
}

export default Comments;
