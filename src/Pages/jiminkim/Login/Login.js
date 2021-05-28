import React from 'react';
import './Login.scss';
import '../Styles/common.scss';

import { Link, withRouter } from 'react-router-dom';

//function Login() {
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: '',
      pwVal: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idVal: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwVal: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/jiminkim/main');
  };
  render() {
    return (
      <div className="login">
        <main className="login-box">
          <h1 className="title">Westagram</h1>
          <input
            type="text"
            id="txtLoginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          />
          <input
            type="password"
            id="txtLoginPw"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          />
          <button id="buttonLogin" onClick={this.goToMain}>
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
