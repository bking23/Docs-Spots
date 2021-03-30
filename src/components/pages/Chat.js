import React from 'react';
import {Container} from 'reactstrap';
import '../../App.css'

function Chat(props){
  // validate token. onFailure -> Login, onSuccess continue
  return(
    <Container>
      <h1>Chat</h1>
      <Container>
        <p align="center">This website is under construction! Check in later for updates!</p>
      </Container>
    </Container>
  );
}
export default Chat;