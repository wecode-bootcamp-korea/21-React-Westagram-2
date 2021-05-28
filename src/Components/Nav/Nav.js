import React from 'react';
import './Nav.scss';

class CommonNav extends React.Component {
  render() {
    return (
      <nav className="commonNav">
        <div>
          <h1 className="logo">Westagram</h1>
          <div className="search">
            <label>
              <i className="fas fa-search"></i>
              <span>Search</span>
            </label>
            <input type="text" />
            <button>
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
          <div className="navIcons">
            <img src="/images/common/home_black.png" alt="home icon" />
            <img src="/images/common/send.png" alt="send icon" />
            <img src="/images/common/compass.png" alt="compass icon" />
            <img src="/images/common/heart.png" alt="heart icon" />
            <img
              className="myProfile-img"
              src="/images/common/wecode-profile.jpeg"
              alt="my profile"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default CommonNav;
