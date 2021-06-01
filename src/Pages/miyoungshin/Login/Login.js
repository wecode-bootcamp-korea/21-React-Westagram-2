import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginMi extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      isIdFocus: false,
      isPwFocus: false,
      isLoginActive: false,
    };
  }

  inputChange = e => {
    const { value } = e.target;
    this.setState({
      [e.target.name]: value,
    });
  };

  idFocusChange = () => {
    const { isIdFocus } = this.state;
    this.setState({
      isIdFocus: !isIdFocus,
    });
  };

  pwFocusChange = () => {
    const { isPwFocus } = this.state;
    this.setState({
      isPwFocus: !isPwFocus,
    });
  };

  checkValid = () => {
    const valid =
      this.state.id.includes('@') && this.state.password.length >= 5;

    this.setState({
      isLoginActive: valid ? true : false,
    });
  };

  render() {
    return (
      <div className="loginMi">
        <section>
          <div className="mainImages">
            <img
              src="/images/miyoungshin/login/smartphone.png"
              alt="smartphone"
            />
            <img
              className="thumbnailImage"
              src="/images/miyoungshin/login/rolling-1.jpeg"
              alt="instagram thumbnail"
            />
          </div>
        </section>
        <section className="contents">
          <article className="logInBox">
            <h1>Westagram</h1>
            <div
              className={
                'idInput ' +
                (this.state.isIdFocus ? 'inputFocusOn' : 'inputFocusOff')
              }
            >
              <input
                type="text"
                placeholder="Phone number, username, or email"
                name="id"
                value={this.state.id}
                onFocus={this.idFocusChange}
                onBlur={this.idFocusChange}
                onChange={this.inputChange}
                onKeyUp={this.checkValid}
              />
              <div onClikck={this.inputFocus}>
                Phone number, username, or email
              </div>
            </div>
            <div
              className={
                'pwInput ' +
                (this.state.isPwFocus ? 'inputFocusOn' : 'inputFocusOff')
              }
            >
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onFocus={this.pwFocusChange}
                onBlur={this.pwFocusChange}
                onChange={this.inputChange}
                onKeyUp={this.checkValid}
              />
              <div>Password</div>
              <button>Show</button>
            </div>
            <button
              className={
                'logInButton ' +
                (this.state.isLoginActive ? 'logInButtonOn' : 'logInButtonOff')
              }
            >
              Log in
            </button>
            <div className="or">
              <div className="orLine"></div>
              <div className="orText">OR</div>
              <div className="orLine"></div>
            </div>
            <div className="logInFacebook">
              <Link to="#">
                <img
                  src="/images/miyoungshin/login/facebook.png"
                  alt="facebook icon"
                />
                <p>Log in with Facebook</p>
              </Link>
            </div>
            <div className="forgotPassword">
              <Link to="#">Forgot password?</Link>
            </div>
          </article>
          <article className="signUpBox">
            <p>
              Don't have an account? <Link to="#">Sign up</Link>
            </p>
          </article>
          <article className="getTheApp">
            <p>Get the app.</p>
          </article>
          <article>
            <Link to="#">
              <img
                className="appDownloadButton"
                src="/images/miyoungshin/login/appstore-button.png"
                alt="app store button"
              />
            </Link>
            <Link to="#">
              <img
                className="appDownloadButton"
                src="/images/miyoungshin/login/googleplay-button.png"
                alt="googleplay button"
              />
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default LoginMi;
