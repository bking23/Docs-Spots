import React from 'react';
import { Redirect } from 'react-router';
import Login from './Login';
import Logout from './Logout';
console.log("in Log " + sessionStorage.token);
export default function Log(){
  if (sessionStorage.token)
  return ( <p>Welcome {sessionStorage.name.substring(0,sessionStorage.name.indexOf(" "))} <Logout /></p>)
else return(<p><Login /></p> )
}
