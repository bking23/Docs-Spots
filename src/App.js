//Import React Router
import React from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router } from 'react-router-dom';

//Import css file
import './css/App.css';

//Import classes
import Home from './classes/home';
import Profile from './classes/profile';
import Chat from './classes/chat';
import Nearby from './classes/nearby';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route path="/" exact render={()=>{
          return(<Home/>);
        }}/>
        <Route path="/profile" exact render={()=>{
          return(<Profile/>);
        }}/>
        <Route path="/chat" exact render={()=>{
          return(<Chat/>);
        }}/>
        <Route path="/nearby" exact render={()=>{
          return(<Nearby/>);
        }}/>
      </div>
    </Router>
    );
  }
}
export default App;