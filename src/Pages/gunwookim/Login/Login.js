import React from 'react';

import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isVerify: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.loginValidation);
  };

  loginValidation = () => {
    const { email, password } = this.state;
    const emailVerify = email.includes('@');
    const passwordVerify = password.length >= 5 ? true : false;

    this.setState({
      isVerify: emailVerify && passwordVerify,
    });
  };

  render() {
    const { isVerify } = this.state;

    return (
      <div className="Login">
        <main>
          <div>
            <h1>westargram</h1>
          </div>
          <div>
            <form>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                onChange={this.handleInput}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
              <button disabled={!isVerify}>로그인</button>
            </form>
          </div>
          <div>
            <Link to="/gunwookim/main">비밀번호를 잊으셨나요?</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
