
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

corsOptions = {
  origin: "https://docs-spots.herokuapp.com/",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const weatherRouter = require('./routes/weather');

app.use('/users', usersRouter);
app.use('/weather', weatherRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});