import React from 'react';

import './Post.scss';

class PostImg extends React.Component {
  render() {
    const { postImg, postImgName } = this.props;

    return (
      <div className="PostImg">
        <img src={postImg} alt={postImgName} />
      </div>
    );
  }
}

export default PostImg;
