import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const SignInLink = () =>
  <p>
    Already have an account?
    {' '}
    <Link to={ROUTES.LOG_IN}>Sign in now!</Link>
  </p>

export default SignInLink;