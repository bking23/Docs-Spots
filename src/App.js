import './App.css';
import React, { useContext, createContext, useState } from 'react';
// import PrivateRoute from 'react-private-route';
import Login from './components/Login';
import Logout from './components/Logout';
import verifyId from './components/verifyId'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from 'react-router-dom';

export default function App(){
  return (
    // <ProvideAuth>
      <Router>
      <Navbar/>
      <button onClick="logSomething()">{loggedIn}</button>
      <Login/>
      <Logout/>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <PrivateRoute path='/profile' component={Profile}/> 
        <PrivateRoute path='/chat' component={Chat} /> 
        <PrivateRoute path='/nearby' component={Nearby} />  */}

      <ProtectedRoute path='/profile' component={Profile}/> 
      <ProtectedRoute path='/chat' component={Chat} /> 
      <ProtectedRoute path='/nearby' component={Nearby} /> 
        {/* <Route path='*' component={Home} /> */}
      </Switch>
      <Footer/> 
      </Router>
    // </ProvideAuth> 
  );
}

function logSomething(){
  const [loggedIn, setLoggedIn] = useState('Login');
  if (loggedIn === 'Login'){
    if ({Login}){
      setLoggedIn = 'Logout';
    }
  } else if ({Logout}){
    setLoggedIn = 'Login';
  }
}

// window.addEventListener('storage', () => {
//   // When local storage changes, dump the list to
//   // the console.
//   console.log('event listner: ' + JSON.parse(window.localStorage.getItem('')));
// });


window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem('token')));
};

class ProtectedRoute extends Route {
  constructor(props){
  super(props);
  this.state = {authenticated: true}
  }
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect  to='/' />
        )} 
      />
    )
  }
}

// const [isLoggedIn, setIsLoggedIn] = useState(false);
// setIsLoggedIn(verifyId());
// const authContext = createContext();

// function useAuth() {
//   return useContext(authContext);
// }

// const myAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     myAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     myAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function useProvideAuth() {
//   const [user, setUser] = useState(null);

//   const signin = cb => {
//     return myAuth.signin(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signout = cb => {
//     return myAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

//   return {
//     user,
//     signin,
//     signout
//   };
// }

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome {auth.user}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p></p>
//   );
// }

// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }