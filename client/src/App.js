import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import Register_login from './components/pages/Register_login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/chat' component={Chat} />
        <Route path='/nearby' component={Nearby} />
        <Route path='/Register_login' component={Register_login} />
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;