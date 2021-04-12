const fetch = require('node-fetch')
const router = require('express').Router();

router.get('/',(req, res) => {
  var value=req.url.split("=")[1]
  console.log(`Recieved request at /api/weather/ : ${value}`)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.OPENWEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data=>res.status(200).send(data))
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;