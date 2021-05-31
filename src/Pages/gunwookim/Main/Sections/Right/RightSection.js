import React, { Component } from 'react';
import ImgLink from '../../../../../Components/gunwookim/ImgLink';
import SpanLink from '../../../../../Components/gunwookim/SpanLink';

class RightSection extends Component {
  render() {
    return (
      <div className="RightSection">
        <div>
          <ImgLink src="/images/gunwookim/user.jpeg" alt="user" to="" />
          <SpanLink to="" text="좋아요사용자" />
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default RightSection;
