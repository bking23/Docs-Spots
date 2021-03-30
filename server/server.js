const express = require('express');
const app = express();

const { OAuth2Client } = require('google-auth-library');

require('dotenv').config();

const port = process.env.PORT || 5000;

const client = new OAuth2Client(process.env.AUTH_CLIENT_ID);

const googleAuth = async(token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.AUTH_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  console.log("User ${payload.name} has a gmail account");
  const { sub, email, name } = payload;
  const userId = sub;
  if (email === "jirani@towson.edu" || email.split("@")[1] === "students.towson.edu"){
   return `{token: ${token}, userId: ${userId}, email: ${email}, fullName: ${name}}`;
  } else return `{token: null, userId: ${userId}, email: ${email}, fullName: ${name}}`;
};

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});