import React from 'react';

import './Modal.scss';
import PostImg from './Sections/Left/Feeds/FeedSections/PostSection/PostImg';

class Modal extends React.Component {
  render() {
    const { modalEvent, feed } = this.props;

    return (
      <div className="Modal" onClick={modalEvent}>
        <div className="ModalIn" onClick={e => e.stopPropagation()}>
          <PostImg postImg={feed.postImg} />
        </div>
      </div>
    );
  }
}

export default Modal;
