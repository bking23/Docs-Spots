import './App.css';
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Navbar/>
      < Login/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/chat' component={Chat} />
        <Route path='/nearby' component={Nearby} />
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;