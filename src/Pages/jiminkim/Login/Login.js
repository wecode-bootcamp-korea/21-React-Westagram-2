import React from 'react';
import './Login.scss';
import '../Styles/common.scss';

import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPw: '',
      isVerify: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      // setState가 비동기처리가 되기 때문에, state변경 후 아래 function 실행하도록 로직분리
      function () {
        const { loginId, loginPw } = this.state;
        const isVerify = loginId.includes('@') && loginPw.length >= 5;

        this.setState({
          isVerify,
        });
      }
    );
  };

  handleLogin = e => {
    //[2021.6.2]백엔드와 첫 통신
    //http://10.58.7.179:8000/users/signin
    // fetch('http://10.58.2.225:8000/join/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.loginId,
    //     password: this.state.loginPw,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    // if (!this.state.isPossibleLogin) return false;
    this.props.history.push('/jiminkim/main');
  };

  render() {
    const { isVerify } = this.state;
    return (
      <div className="login">
        <main className="login-box">
          <h1 className="title">Westagram</h1>
          <input
            type="text"
            id="txtLoginId"
            name="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
          />
          <input
            type="password"
            id="txtLoginPw"
            name="loginPw"
            placeholder="비밀번호"
            onChange={this.handleInput}
          />
          <button
            id="buttonLogin"
            onClick={this.handleLogin}
            className={!isVerify && 'inactive'}
            disabled={!isVerify}
          >
            로그인
          </button>
          <Link className="find-passwd-str" to="/main">
            비밀번호를 잊으셨나요?
          </Link>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
