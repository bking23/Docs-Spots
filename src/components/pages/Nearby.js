import {React,useState} from 'react';
import {Button,Col,Container,Label,Input,Row} from 'reactstrap';
import {GoogleMap, LoadScript} from '@react-google-maps/api';

function Nearby(props){
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  var [location,setLocation]=useState({
    city:"Towson",
    coordinates:{
      lat:39.4015,
      lng:-76.6019
    }
  })
  var [weather,setWeather]=useState({
    temp:75,
    desc:"Sunny"
  })
  var [forecast, setForecast]=useState({

  })
  var getWeather = () => {
    var inputValue = document.querySelector('.inputValue');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${inputValue.value}+&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setLocation({
        city:data['name'],
        coordinates:{
          lat:data['coord']['lat'],
          lng:data['coord']['lon']
        }
      })
      setWeather({
        temp:((data['main']['temp'] - 273.15)* 1.8000 + 32.00).toFixed(2), //converts from K to F
        desc:data['weather'][0]['description']
      })
    })
    .catch(err => alert("An error occurred!"))
  }
  return(
    <Container className="App-content">
      <h1>Nearby</h1>
      <Container>
        <Container>
          <p align="center">Enter a city to find out its current weather status.</p>
          <Container className="display">
            <Row>
              <Col>
                <Label for="inputValue">Enter a city:</Label>
                <Input type="text" className="inputValue" placeholder={location.city}/><br/>
                <Button type="submit" value="submit" color="primary" onClick={getWeather}>Submit</Button>
              </Col>
              <Col>
                <h6>{location.city}</h6>
                <p>{weather.temp}&#176; F</p>
                <p>{weather.desc}</p>
              </Col>
              <Col>
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                  <GoogleMap mapContainerStyle={containerStyle} zoom={15} center={location.coordinates}/>
                </LoadScript>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
export default Nearby;