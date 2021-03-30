import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
// var axios = require('axios');

const dotenv = require('dotenv').config();

// const clientId = dotenv.REACT_ENV_AUTH_CLIENT_ID;
const clientId = "736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com";
// console.log("clientId: " + clientId);


function Login(){
  console.log("Before login. current LoggedIn status: " + localStorage.getItem('isLoggedIn'));
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [token, setToken] = useState("");

  const onSuccess = (res) => {
    localStorage.clear()
    console.log('Google verified gmail: ', res);
    // setName(res.profileObj.name);
    // setEmail(res.profileObj.email);
    // setToken(res.tokenId);
    if (res.profileObj.email === "jirani@towson.edu" || res.profileObj.email.split("@")[1] === "students.towson.edu"){
      console.log(`name: ${res.profileObj.name}, email: ${res.profileObj.email}, token: ${res.tokenId}`);
      setLoggedIn(true);
      refreshTokenSetup(res);
      localStorage.setItem('email', res.profileObj.email);
      localStorage.setItem('name', res.profileObj.name);
      localStorage.setItem('token', res.tokenId);
      // localStorage.setItem('token', token);
      //  googleAuth(res.tokenId);
    }
    console.log("After login. current LoggedIn status: " + localStorage.getItem('email'));
  };

  const onFailure = (res) => {
    setLoggedIn(false);
    console.log('Google auth failed: ', res);
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
    <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}
export default Login;