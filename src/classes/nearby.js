import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

//API Key: 34b1fa7e6c91da42339cfca8b4436c2e
const containerStyle = {
  width: '400px',
  height: '400px'
};
var center={
  lat: 39.4015,
  lng: -76.6019
}
class Nearby extends React.Component{
  constructor(props) {
      super(props);
      this.getWeather = this.getWeather.bind(this);
      this.state = {
        activeView: 'map',
        lat: 39.4015,
        lng: -76.6019,
        city: 'Towson',
      };
  }
  getWeather = () => {
    var inputValue = document.querySelector('.inputValue');
    var name = document.querySelector('.name');
    var desc = document.querySelector('.desc');
    var temp = document.querySelector('.temp');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${inputValue.value}+&appid=34b1fa7e6c91da42339cfca8b4436c2e`)
    .then(response => response.json())
    .then(data => {
      this.state.lat=data['coord']['lat'];
      this.state.long=data['coord']['lon'];
      this.state.city = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      tempValue = ((tempValue - 273.15)* 1.8000 + 32.00).toFixed(2)
      var temperature = `${tempValue}&#176;`

      name.innerHTML = "Location: " + this.state.city;
      temp.innerHTML = "Temperature: " + temperature;
      desc.innerHTML = "Current Status: " + descValue;
    })
    .catch(err => alert("Wrong city name!"))
  }
  render(){
      return(
        <div className="App-content">
          <h1>Nearby</h1>
          <div className="flex-container">
            <div className="flex-item">
              <p align="center">Enter a city to find out its current weather status.</p>
              <div className="input">
                <input type="text" className="inputValue" placeholder="Enter a city"></input>
                <br />
                <br />
                <button type="submit" value="Submit" className="button" onClick={this.getWeather}>Submit</button>
              </div>
              <div className="display">
                <h1 className="name"></h1>
                <p className="desc"></p>
                <p className="temp"></p>
              </div>
            </div>
            <div className="flex-item map">
              <LoadScript googleMapsApiKey='insertapiKeyhere'>
                <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={center}/>
              </LoadScript>
            </div>
          </div>
        </div>
      );
  }
}
export default Nearby;