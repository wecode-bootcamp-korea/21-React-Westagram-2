import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    const { open, close, header } = this.props;

    return (
      <>
        <div className={open ? 'modal openModal' : 'modal'}>
          {open ? (
            <section>
              <header>
                {header}
                <div className="close" onClick={close}>
                  <svg
                    aria-label="닫기"
                    class="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </header>
              <main>{this.props.children}</main>
              {/* <footer>
                <button className="close" onClick={close}>
                  close
                </button>
              </footer> */}
            </section>
          ) : null}
        </div>
      </>
    );
  }
}

export default Modal;
