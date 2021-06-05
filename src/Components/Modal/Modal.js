import React from 'react';
import './Modal.scss';
import { CloseIcon } from '../SVG/SVG';

class Modal extends React.Component {
  render() {
    const { open, close, header, children } = this.props;

    return (
      <div className={`Modal ${open && 'openModal'}`}>
        {open && (
          <section>
            <header>
              {header}
              <div className="close" onClick={close}>
                <CloseIcon />
              </div>
            </header>
            <main>{children}</main>
          </section>
        )}
      </div>
    );
  }
}

export default Modal;
