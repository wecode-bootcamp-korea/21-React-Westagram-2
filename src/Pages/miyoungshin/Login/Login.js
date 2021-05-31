import React from 'react';
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
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  idFocusChange = () => {
    this.setState({
      isIdFocus: !this.state.isIdFocus,
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

    valid
      ? this.setState({ isLoginActive: true })
      : this.setState({ isLoginActive: false });
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
              disabled={this.state.isLoginActive}
            >
              Log in
            </button>
            <div className="or">
              <div className="orLine"></div>
              <div className="orText">OR</div>
              <div className="orLine"></div>
            </div>
            <div className="logInFacebook">
              <a href="#">
                <img
                  src="/images/miyoungshin/login/facebook.png"
                  alt="facebook icon"
                />
                <p>Log in with Facebook</p>
              </a>
            </div>
            <div className="forgotPassword">
              <a href="#">Forgot password?</a>
            </div>
          </article>
          <article className="signUpBox">
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </article>
          <article className="getTheApp">
            <p>Get the app.</p>
          </article>
          <article>
            <a href="#">
              <img
                className="appDownloadButton"
                src="/images/miyoungshin/login/appstore-button.png"
                alt="app store button"
              />
            </a>
            <a href="#">
              <img
                className="appDownloadButton"
                src="/images/miyoungshin/login/googleplay-button.png"
                alt="googleplay button"
              />
            </a>
          </article>
        </section>
      </div>
    );
  }
}

export default LoginMi;
