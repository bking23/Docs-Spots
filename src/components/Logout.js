import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.AUTH_CLIENT_ID;

function Logout(){
  const onLogoutSuccess = (res) => {
    alert("Logged out successfully");
  };
  const onFailure = () => {
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