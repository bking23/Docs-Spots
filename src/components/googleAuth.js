const { OAuth2Client } = require('google-auth-library');

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
const client = new OAuth2Client(clientId);

const googleAuth = async () => {
  let token = sessionStorage.getItem('token');
  if (typeof token === 'undefined' || typeof token === 'null')
   return false
  else {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    console.log("in googleAuth");
    console.log(`User ${payload.name} verified`);
    const {email} = payload;
    const retVal = (email === "jirani@towson.edu" || email.split("@") === "students.towson.edu");
   return retVal;
  };
}
module.exports = googleAuth;