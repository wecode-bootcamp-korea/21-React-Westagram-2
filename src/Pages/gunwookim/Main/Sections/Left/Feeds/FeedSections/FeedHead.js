import React from 'react';
import { Link } from 'react-router-dom';

import '../Feed.scss';

class FeedHead extends React.Component {
  render() {
    return (
      <div className="FeedHead">
        <div className="ImgLink">
          <Link to="">
            <img src="/images/gunwookim/user.jpeg" alt="user" />
          </Link>
        </div>

        <div className="UserSpanLink">
          <Link to="">
            <span>포스트의게시자</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default FeedHead;
