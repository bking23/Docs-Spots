// import React from 'react';
// import {Container} from 'reactstrap';
// import '../../App.css'
// import Login from '../../Login.js'


// function Register_login(props){
//   return(
//     <Container>
//       <h1>Register/Login</h1>
//       <Container>
//         <p align="center" className="register_login">This website is under construction! Check in later for updates!</p>
//       </Container>
//     </Container>
//   );
// }
// export default Register_login;

// import React from 'react';

// import { useGoogleLogin } from 'react-google-login';

// import { refreshTokenSetup } from '../../utils/refreshToken';
// require('dotenv').config();

// const clientId = process.env.AUTH_CLIENT_ID;
// console.log("clientId = " + process.env.AUTH_CLIENT_ID);

// function Register_login() {
//   const onSuccess = (res) => {
//     console.log('Google verified gmail: ', res.profileObj);
//     //send to back end
//     // check if acceptable here
//     refreshTokenSetup(res);
//   };
//   const onFailure = (res) => {
//     console.log('Google auth failed: ', res);
//   };

//   const { signIn } = useGoogleLogin({
//     onSuccess,
//     onFailure,
//     clientId,
//     isSignedIn: true,
//     accessType: 'offline',
//   });
//   return (
//     <button onClick={signIn} className="button">
//       <span className="buttonText">Sign in with Google</span>
//     </button>
//   );
// }
// export default Register_login;