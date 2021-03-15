
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

const { OAuth2Client } = require('google-auth-library');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const client = new OAuth2Client(process.env.AUTH_CLIENT_ID);

// corsOptions = {
//   origin: "https://docs-spots.herokuapp.com/",
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// const usersRouter = require('./routes/users');

// app.use('/users', usersRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

const googleAuth = async(token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.AUTH_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  console.log("User ${payload.name} has a gmail account");
  const { sub, email, name, picture } = payload;
  const userId = sub;
  return { userId, email, fullName: name };
};

module.exports = googleAuth;