import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
// var axios = require('axios');

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

function Login(){
  const onSuccess = (res) => {
    sessionStorage.clear();
    var isLoggedIn = false;
    if (res.profileObj.email === "jirani@towson.edu" || res.profileObj.email.split("@")[1] === "students.towson.edu"){
      // console.log(`name: ${res.profileObj.name}, email: ${res.profileObj.email}, token: ${res.tokenId}`);
      // console.log(`name: ${res.profileObj.name}, email: ${res.profileObj.email}`);
      // refreshTokenSetup(res);
      isLoggedIn = true;
      sessionStorage.setItem('email', res.profileObj.email);
      sessionStorage.setItem('name', res.profileObj.name);
      sessionStorage.setItem('token', res.tokenId);
    }
    // console.log("After login. current LoggedIn status: " + isLoggedIn);
    return isLoggedIn;
  };

  const onFailure = (res) => {
    // console.log('Google auth failed: ', res);
    return false;
  };

 const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // cookiePolicy='single_host_origin',
  });
  
 return (
    <button onClick={signIn}>
      <p>Google Signin</p>
    </button>
  );
}
export default Login;