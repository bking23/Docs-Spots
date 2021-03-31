import './App.css';
import React, { useContext, createContext, useState, Component } from 'react';
import PrivateRoute from 'react-private-route';
import Login from './components/Login';
import Logout from './components/Logout';
import verifyId from './components/verifyId';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation, BrowserRouter} from 'react-router-dom';


export default function App(){
  const isLoggedIn = false;
  return (
        <Router>
        <Navbar/>
        {/* <AuthButton /> */}
        {/* <LogSomething /> */}
        {/* <button onClick="LogSomething()">{true}</button> */}
        {/* { isLoggedIn ? {isloggedIn = Login} : {isLoggedIn = !Logout} } */}
        <Login />
        <Logout />
        {/* <Log /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoute path='/profile' comp={Profile} /> 
          <ProtectedRoute path='/chat' comp={Chat} /> 
          <ProtectedRoute path='/nearby' comp={Nearby} /> 
          <Route path='*' component={Home} />
        </Switch>
        <Footer/> 
        </Router>
  );
}

window.onstorage = () => {
  try{
    // console.log('event listner: ' + JSON.parse(window.localStorage.getItem('token')));
    verifyId() ? console.log("verified") : localStorage.clear();
  }catch (e){
    console.log(e);
    localStorage.clear();
  }
};


// window.onStorageChange(verifyId);

// window.onStorageChange = () => {
//   // When local storage changes, dump the list to
//   // the console.
//   console.log("storage changed");
//   if (!verifyId()){
//     localStorage.clear();
//     console.log('storage changed, token present is not valid');
//   } else {
//     console.log("storage changed, token present is valid");
//   }
// };

const ProtectedRoute = ({
  comp: Component,
  ...rest
}) => (
  <Route
  {...rest}
  render={props =>
  localStorage.getItem('token') ? (
  <Component {...props} />
) : (
    <Redirect to="/" />
)
  }
  />
  );

//  const Log = {
//     render={(verifyId() ? <button onClick={Logout}>Sign out</button> :  <button onClick={Login}>Sign in</button>)}
//  }

// const [isLoggedIn, setIsLoggedIn] = useState(false);
// setIsLoggedIn(verifyId());
// const authContext = createContext();