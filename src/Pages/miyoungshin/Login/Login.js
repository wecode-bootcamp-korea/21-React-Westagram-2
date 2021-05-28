import React from 'react';
import './Login.scss';

class LoginMi extends React.Component {
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
            <div className="idInput">
              <input type="text" required />
              <label>Phone number, username, or email</label>
            </div>
            <div className="pwInput">
              <input type="password" />
              <label>Password</label>
              <button>Show</button>
            </div>
            <button className="logInButton" disabled="disabled">
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
