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
      imgURL: req.body.imgURL,
      username: "",
      phone: ""
  });

  User.count({email: req.body.email}, function(err, count){
    if (count == 0){
      newUser.save()
    .then(() => res.json('User added!'))
    .then(console.log("User added!"))
    .catch(err => res.status(400).json('Error: ' + err));

    console.log(newUser);
    }
    else{
      console.log('User already exists.');
    }
  });

  
});

//PUT - update user by ID
router.put('/update', (req, res) => {
  console.log('Request received at update')
  User.findOne({email: req.body.email})
      .then(user => {
          user.username = req.body.username;
          user.phone= req.body.phone;

          user 
              .save()
              .then(() => res.json('User updated!'))
              .catch(err => res.status(400).json(`Error: ${err}`));
      })
      .catch(err => res.status(400).json(`Error: ${err}`));
});

//GET - get user by email
router.get('/getByEmail', (req, res) => {
  console.log('Request received at getByEmail')
  User.findOne({email: req.body.email})
      .then(user => res.json(user)).then(() => r)
      .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;