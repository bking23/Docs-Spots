require('dotenv').config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '736729752425-puvqvdfvlhiuptbfdeiej8bo93brjjmj.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);


const PORT = 5000;

// Middleware

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
    res.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
    res.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
    res.render('index');
})

app.get('/login', (req,res)=>{
    res.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
    res.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
    res.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
    res.render('login');
})

app.post('/login', (req,res)=>{
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        const domain = payload['hd'];
        console.log("From Towson: " + (domain == 'students.towson.edu'));
        console.log("user-id: " + userid);
        console.log(payload);
        console.log("token: " + token);
        if (domain != 'students.towson.edu' && payload.email != 'jiarni@towson.edu')
            token = {};
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('success');
      })
      .catch(console.error);

})

app.get('/housing', checkAuthenticated, (req, res)=>{
    let user = req.user;
    res.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
    res.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
    res.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
    res.render('housing', {user});
})

app.get('/map', checkAuthenticated, (req, res)=>{
    let user = req.user;
    res.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
    res.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
    res.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
    res.render('map', {user});
})

app.get('/profile', checkAuthenticated, (req, res)=>{
    let user = req.user;
    res.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
    res.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
    res.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
    res.render('profile', {user});
})

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')

})


function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
          req.user = user;
          next();
      })
      .catch(err=>{
          res.redirect('/login')
      })
}

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})