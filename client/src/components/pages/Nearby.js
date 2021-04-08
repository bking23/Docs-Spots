import {React,useState,useEffect} from 'react';
import {Col,Container,Row} from 'reactstrap';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import { Timeline } from 'react-twitter-widgets'

function Nearby(props){
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  var [location,setLocation]=useState({
    city:"Towson",
  })
  var [weather,setWeather]=useState({
    temp:75,
    feels: 70,
    hum:30,
    sunrise:1610380287270,
    sunset:1610380287270,
    desc:"Sunny"
  })
  var getTime=()=>{

  }
  useEffect(() => {
    getWeather();
  }, [])
  var getWeather = () => {
    fetch(`http://192.168.1.9:5000/weather?location=${location.city}`)
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
      <Container>
        <Container>
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
                <h6>Weather in {location.city}:</h6>
                <p>{weather.desc}</p>
                <p>Temperature: {weather.temp}&#176; F</p>
                <p>Feels like: {weather.feels}&#176; F</p>
                <p>Humidity: {weather.hum}</p>
                <p>Sunrise: {weather.sunrise}</p>
                <p>Sunset: {weather.sunset}</p>
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