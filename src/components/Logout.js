import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = "736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com";

function Logout(){
  const onLogoutSuccess = (res) => {
    localStorage.clear();
    alert("Logged out successfully");
  };
  const onFailure = () => {
    localStorage.clear();
    console.log("there was a failure on logout");
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