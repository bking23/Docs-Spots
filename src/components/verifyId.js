const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com");

const verifyId = async () => {
  var retVal = false;
  var token = localStorage.getItem('token');
  if (!!token){
  try{
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    console.log("in googleAuth");
    const {email} = payload;
    console.log("email: " + email);
    retVal = (email === "jirani@towson.edu" || email.split("@")[1] === "students.towson.edu");
    console.log("retVal = " + retVal);
    console.log(`User ${payload.name} ` + (retVal ? 'authorized' : 'rejected'));
  } catch (e) {
    console.log(e);
  }
  console.log("verifyId: " + retVal);
  if (retVal != true)
  localStorage.clear();
   return retVal;
};
}
// module.exports = verifyId;
export default verifyId;