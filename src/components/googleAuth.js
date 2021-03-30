const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com");

const googleAuth = async () => {
  let token = localStorage.getItem('token');
  if (typeof token === 'undefined' || typeof token === 'null')
   return false
  else {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com",
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