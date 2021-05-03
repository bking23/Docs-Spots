const router = require('express').Router();
let User = require('../../models/user.model');

router.get("/",(req, res) => {
  console.log("Recieved request at /api/users/")
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add",(req, res) => {

  const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      imgURL: req.body.imgURL
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .then(console.log("User added!"))
    .catch(err => res.status(400).json('Error: ' + err));

    console.log(newUser);
});

module.exports = router;