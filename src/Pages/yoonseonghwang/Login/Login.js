import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '#c0dffd',
      disabled: true,
      id: '',
      pw: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });

    !this.state.id.includes('@') || this.state.pw.length < 5
      ? this.setState({ disabled: true, backgroundColor: '#c0dffd' })
      : this.setState({ disabled: false, backgroundColor: '#0095f6' });
  };
  goToMain = () => {
    this.props.history.push('./Main');
  };

  render() {
    return (
      <div className="total">
        <div className="topContainer">
          <div className="phone">
            <img
              className="dummyParent"
              src="/images/yoonseonghwang/Login-Dummy/smartphone.png"
              alt="phone"
            />
            <img
              className="dummyChild"
              src="/images/yoonseonghwang/Login-Dummy/rolling-1.jpeg"
              alt="dummy"
            />
          </div>
          <div className="contentsContainer">
            <div className="loginPage">
              <header>
                <h1>Westagram</h1>
              </header>
              <main>
                <div className="inputContainer">
                  <form>
                    <input
                      type="text"
                      className="id"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      value={this.state.id}
                      onChange={this.handleIdInput}
                    />
                    <input
                      type="password"
                      name="pw"
                      className="password"
                      placeholder="비밀번호"
                      onChange={this.handlePwInput}
                      value={this.state.pw}
                    />
                    <button
                      type="submit"
                      className="loginBtn"
                      onClick={this.goToMain}
                      style={{ backgroundColor: this.state.backgroundColor }}
                      disabled={this.state.disabled}
                    >
                      로그인
                    </button>
                  </form>

                  <div className="junkWrap">
                    <div className="junkLine"></div>
                    <div className="junkP">또는</div>
                    <div className="junkLine"></div>
                  </div>

                  <div className="faceBook">
                    <i className="fab fa-facebook-square"></i>
                    <span>facebook으로 로그인</span>
                  </div>
                  <div className="secondWay">
                    <a href="/" aria-label="find password">
                      비밀번호를 잊으셨나요?
                    </a>
                  </div>
                </div>
              </main>
            </div>
            <aside className="joinContainer">
              <div className="join">
                <p>계정이 없으신가요</p>
                <a href="/">가입하기</a>
              </div>
              <div className="induceUser">
                <span>앱을 다운로드하세요.</span>
                <div className="storeBtn">
                  <img
                    className="appStore"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                    alt="appstore"
                  />
                  <img
                    className="googlePlay"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                    alt="googleplay"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>

        <footer>
          <div className="footer1">
            <span>소개</span>
            <span>블로그</span>
            <span>채용 정보</span>
            <span>도움말</span>
            <span>API</span>
            <span>개인정보처리방침</span>
            <span>약관</span>
            <span>인기 계정</span>
            <span>해시태그</span>
            <span>위치</span>
          </div>
          <div className="footer2">
            <span>한국어</span>
            <span>© 2021 Instagram from Facebook</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
