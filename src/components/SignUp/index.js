import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RegisterForm from './SignUpForm';

import SignInLink from './SignInLink';

class SignUp extends Component {
  render() {

    //let message = this.props.auth.error;

    return <div>
      <h1>Register</h1>
      <RegisterForm />

      <hr />
      <SignInLink />
    </div>
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUp);