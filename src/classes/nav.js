import React from 'react';

class Nav extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'home',
      };
  }
  render(){
    return (
      <div>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./profile">Profile</a></li>
          <li><a href="./chat">Chat</a></li>
          <li><a href="./nearby">Nearby</a></li>
          <li><input class='searchbar' placeholder='search'/></li>
          <div class='buttons'>
            <li><button>Register</button></li>
            <li><button>Login</button></li>
          </div>
        </ul>
      </div>
    )
  }
};
export default Nav;