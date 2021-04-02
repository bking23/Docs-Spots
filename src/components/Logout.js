import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

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