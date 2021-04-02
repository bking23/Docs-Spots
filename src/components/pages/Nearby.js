import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import '../../App.css';
import googleAuth from '../googleAuth.js';


function Nearby(props){
  return(
    <div>
      <h1 className="nearby">Near You</h1>
      <Container>
        <Row>
          <p align="center">This website is under construction! Check in later for updates!</p>
        </Row>
        <Row>
          <Col>
            <iframe width="500" height="400" frameBorder="0"
            src="https://www.bing.com/maps/embed?h=400&w=500&cp=39.398698652149086~-76.6038566685178&lvl=14&typ=d&sty=r&src=SHELL&FORM=MBEDV8" 
            scrolling="no">
            </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Nearby;