import React from 'react';
import ImgLink from '../../../../../../../../Components/gunwookim/ImgLink';
import SpanLink from '../../../../../../../../Components/gunwookim/SpanLink';
import Comment from './Comment';

class PostContent extends React.Component {
  render() {
    const { commentList, postcontent } = this.props;

    return (
      <div className="PostContent">
        <div>
          <div className="fixed">
            <ImgLink src="/images/gunwookim/user.jpeg" alt="user" to="a" />
          </div>
          <SpanLink to="" text="좋아요사용자" />
        </div>
        <div>
          <div>{postcontent}</div>
        </div>
        <ul>
          {commentList.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostContent;
