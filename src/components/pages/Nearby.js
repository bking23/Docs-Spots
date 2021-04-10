import {Col,Container,Row} from 'reactstrap'
import { Timeline } from 'react-twitter-widgets'
import {React,useState,useEffect} from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api'

function Nearby(props){
  const API_URL='http://192.168.1.9';
  const API_PORT=5000;
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  var location={
    city:"Towson",
    coordinates:{
      lat: 39.4015,
      lng:-76.6019
    }
  }
  var [weather,setWeather]=useState({
    temp:75,
    feels: 70,
    hum:30,
    sunrise:1610380287270,
    sunset:1610380287270,
    desc:"Sunny"
  })
  useEffect(() => { 
    console.log(process.env.REACT_APP_GOOGLE_MAPS_KEY)
    getWeather();
  }, [])
  var getWeather = () => {
    fetch(`${API_URL}:${API_PORT}/map`)
    fetch(`${API_URL}:${API_PORT}/weather?location=${location.city}`)
    .then(response=>response.json())
    .then(data => {
      var sunrise=new Date(data['sys']['sunrise'] * 1000);
      var rise_time=`0${sunrise.getHours()}:${sunrise.getMinutes()}:${sunrise.getSeconds()}`;
      var sunset=new Date(data['sys']['sunset'] * 1000);
      var set_time=`${sunset.getHours()}:${sunset.getMinutes()}:${sunset.getSeconds()}`;
      setWeather({
        desc:data['weather'][0]['description'],
        temp:((data['main']['temp'] - 273.15)* 1.8000 + 32.00).toFixed(2), //converts from K to F
        feels:((data['main']['feels_like'] - 273.15)* 1.8000 + 32.00).toFixed(2),
        hum:data['main']['humidity'],
        sunrise:rise_time,
        sunset:set_time
      })
    })
    .catch(err => alert(err))
  }
  return(
    <Container className="App-content">
      <h1>Nearby</h1>
      <Container className="display">
        <Row>
          <Col>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'TowsonU'
            }}
            options={{
              height: '400'
            }}
          />
          </Col>
          <Col>
            <Row><Col>Weather in {location.city}</Col></Row>
            <Row><Col>Description:</Col><Col>{weather.desc}</Col></Row>
            <Row><Col>Temperature:</Col><Col>{weather.temp}&#176; F</Col></Row>
            <Row><Col>Feels Like:</Col><Col>{weather.feels}&#176; F</Col></Row>
            <Row><Col>Humidity:</Col><Col>{weather.hum}%</Col></Row>
            <Row><Col>Sunrise:</Col><Col>{weather.sunrise}</Col></Row>
            <Row><Col>Sunset:</Col><Col>{weather.sunset}</Col></Row>
          </Col>
          <Col>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
              <GoogleMap mapContainerStyle={containerStyle} zoom={15} center={location.coordinates}/>
            </LoadScript>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Nearby;