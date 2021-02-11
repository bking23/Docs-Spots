import React from 'react';

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
//Key: 34b1fa7e6c91da42339cfca8b4436c2e


// Here is where I get the error "TypeError: Cannot read property 'addEventListener' of null"
//All I want to do is get the API to allow for user input
//I added the inputValue variable into the link to make this happen as seen on line 15
button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=+inputValue.value+&appid=34b1fa7e6c91da42339cfca8b4436c2e')
        .then(response => response.json())
        .then(data => {
          var nameValue = data['name'];
          var tempValue = data['main'];
          var descValue = data['weather'][0]['description'];

          name.innerHTML = nameValue;
          temp.innerHTML = tempValue;
          desc.innerHTML = descValue
        })
        .catch(err => alert("Wrong city name!"))

})


class Map extends React.Component{
  constructor(props) {
      super(props);
      fetch('https://api.openweathermap.org/data/2.5/weather?q=+inputValue.value+&appid=34b1fa7e6c91da42339cfca8b4436c2e')
      this.state = {
        activeView: 'map',
      };
  }
  render(){
      return(
          
          <div className="App-content">
            {/* Added this for css styling but I do not believe it works */}
          <link rel="stylesheet" href="Map.css"/>
          <h1>Near You</h1>
          <div className="flex-container">
            <p align="center">This website is under construction! Check in later for updates!</p>
            <div>
              <div class="input">
                <input type="text" class="inputValue" placeholder="Enter a city"></input>
                <input type="submit" value="Submit" class="button"></input>
                
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