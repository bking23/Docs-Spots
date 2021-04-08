const { OAuth2Client } = require('google-auth-library');

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
const client = new OAuth2Client(clientId);

const verifyId = async () => {
  var retVal = false;
  var token = sessionStorage.getItem('token');
  if (token){
    try{
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId,
      });
      const payload = ticket.getPayload();
      // console.log("in googleAuth");
      const {email} = payload;
      // console.log("email: " + email);
      retVal = (email === "jirani@towson.edu" || email.split("@")[1] === "students.towson.edu");
      // console.log("retVal = " + retVal);
      console.log(`User ${email} ` + (retVal ? 'authorized' : 'rejected'));
    } catch (e) {
      console.log(e);
      sessionStorage.clear();
    }
    console.log("verifyId: " + retVal);
    if (retVal != true)
      sessionStorage.clear();
  }
   else {
    console.log("no token");
    sessionStorage.clear();
  }
  if (!retVal)
    sessionStorage.clear();
  return retVal;
}
export default verifyId;