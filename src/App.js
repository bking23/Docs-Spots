import './App.css';
import React, { useContext, createContext, useState, Component } from 'react';
import Log from './components/Log';
// import Login from './components/Login';
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
  return (
        <Router>
        <Navbar/>
        <Log />
        <h4 id="Loginout"><Log/></h4>
        {/* <Login />
        <Logout /> */}
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
  if (!verifyId())
    Logout();
    // sessionStorage.clear();
  // window.location.reload();
    // verifyId() ? console.log("verified token change") : sessionStorage.clear();
};


const ProtectedRoute = ({comp: Component, ...rest}) => (
  <Route
  {...rest}
  render={props =>
  sessionStorage.getItem('token') ? (<Component {...props} />) : (<Redirect to="/" />)
  }
  />
  );