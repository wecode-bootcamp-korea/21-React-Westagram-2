import React from 'react';

import './Modal.scss';

class Modal extends React.Component {
  render() {
    const { modalEvent } = this.props;

    return (
      <div className="Modal" onClick={modalEvent}>
        <div onClick={e => e.stopPropagation()}></div>
      </div>
    );
  }
}

export default Modal;
