// Benjamin King
// COSC 484
// Group Project 
// 02/11/2021
import React from 'react';
import '/Users/benjaminking/Desktop/Docs-Spots/src/css/Map.css'

//API Key: 34b1fa7e6c91da42339cfca8b4436c2e

class Map extends React.Component{
  constructor(props) {
      super(props);
      this.getWeather = this.getWeather.bind(this);
      this.state = {
        activeView: 'map',
      };
  }
  getWeather = () => {
    var inputValue = document.querySelector('.inputValue')
    var name = document.querySelector('.name')
    var desc = document.querySelector('.desc')
    var temp = document.querySelector('.temp')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${inputValue.value}+&appid=34b1fa7e6c91da42339cfca8b4436c2e`)
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      tempValue = ((tempValue - 273.15)* 1.8000 + 32.00).toFixed(2)
      var temperature = `${tempValue}&#176;`

      name.innerHTML = "Location: " + nameValue;
      temp.innerHTML = "Temperature: " + temperature;
      desc.innerHTML = "Current Status: " + descValue
    })
    .catch(err => alert("Wrong city name!"))
  }
  render(){
      return(
          
          <div className="App-content">
          <h1>Weather & Map</h1>
          <div className="flex-container">
            <p align="center">Enter a city to find out its current weather status.</p>
            <div>
              <div class="input">
                <input type="text" class="inputValue" placeholder="Enter a city"></input>
                <br />
                <br />
                <button type="submit" value="Submit" className="button" onClick={this.getWeather}>Submit</button>
              </div>
              <div class="display">
                <h1 class="name"></h1>
                <p class="desc"></p>
                <p class="temp"></p>

              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Map;