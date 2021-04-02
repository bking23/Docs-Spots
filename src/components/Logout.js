import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
const dotenv = require('dotenv').config();

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
// const clientId = "736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com";

function Logout(){
  const onLogoutSuccess = () => {
    localStorage.clear();
    alert("Logged out successfully");
  };
  const onFailure = () => {
    localStorage.clear();
    console.log("Failure on logout");
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  return (
    <button onClick={signOut} className="button">
    <span className="buttonText">Sign out</span>
    </button>
  );
}
export default Logout;