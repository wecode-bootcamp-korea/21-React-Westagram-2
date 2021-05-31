import React from 'react';

import ImgLink from '../../../../../../../../Components/gunwookim/ImgLink';

import './Post.scss';

class PostSubList extends React.Component {
  render() {
    return (
      <div className="PostSubList">
        <div className="PostSubLeft">
          <ImgLink src="/images/gunwookim/heart.png" alt="heart" to="" />
          <ImgLink src="/images/gunwookim/comment.png" alt="comment" to="" />
          <ImgLink src="/images/gunwookim/plane.png" alt="plane" to="" />
        </div>
        <div className="PostSubRight">
          <ImgLink src="/images/gunwookim/bookmark.png" alt="mark" to="" />
        </div>
      </div>
    );
  }
}

export default PostSubList;
