const router = require('express').Router();
let User = require('../../models/user.model');

router.get("/",(req, res) => {
  console.log("Recieved request at /api/users/")
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.options("/add",(req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const imgURL = req.body.imgURL;

  const newUser = new User({
      name: name,
      email: email,
      imgURL: imgURL
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .then(console.log("User added!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;