import React from 'react';
import APPCONFIG from 'constants/appConfig';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';
import SITE from 'constants/siteData'
import fakeAuth from '../../../../../actions/userActions';

// import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      redirectToReferrer: false
    };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={SITE.home} />
    }

    return (
      <div className="body-inner">
        <div className="card card-white">
          <div className="card-content">

            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Password"
                    type="password"
                    className="mt-3"
                    fullWidth
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="card-action border-0 text-right">
            <a className="color-primary" onClick={this.login}>Login</a>
          </div>
        </div>

        <div className="additional-info">
          <a href={DEMO.signUp}>Sign up</a>
          <span className="divider-h" />
          <a href={DEMO.forgotPassword}>Forgot your password?</a>
        </div>

      </div>
    );
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Login />
        </div>
      </QueueAnim>
    </div>
  </div>
);

export default Page;
