import React from 'react';
import './Main.scss';
import '../Styles/common.scss';
import Header from '../../../Components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';

function Main() {
  return (
    <div className="main">
      <Header />
      <main className="container">
        <Feeds />
        <div className="main-right-wrap">
          <MainRight />
        </div>
      </main>
    </div>
  );
}

export default Main;
