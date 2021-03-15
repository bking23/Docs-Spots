import React from 'react';

import { useGoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../utils/refreshToken';
require('dotenv').config();

const client_Id = process.env.AUTH_CLIENT_ID;

function Login() {
  const onSuccess = (res) => {
    console.log('Google verified gmail: ', res.profileObj);
    // check if acceptable here
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log('Google auth failed: ', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: client_Id,
    isSignedIn: true,
    accessType: 'offline',
  });
  return (
    <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}
export default Login;