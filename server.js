
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

if (process.env.NODE_ENV !== "production") require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/api/users');
const weatherRouter = require('./routes/api/weather');

app.use('/users', usersRouter);
app.use('/weather', weatherRouter);
app.get('/map',(req,res)=>{
  res.status(200).send(process.env.REACT_APP_GOOGLE_MAPS_KEY)
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});