// Requiring our models
const db = require("../models");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const exjwt = require('express-jwt');


// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new landlord
  app.post("/landlord/new", function(req, res) {
    db.Landlord.create(req.body).then(function(dbLandlord) {
      res.json(dbLandlord);
    });
  });

  // See the react auth blog in which cors is required for access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever'
});

  // POST route for landlord login
  app.post("/llogin", function (req, res) {
    console.log(req.body);
    db.Landlord.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (data) {
      // we are comparing the plain text password 
      // with the hashsed password here
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        // if the hash and the plain text password match
        if (result) {
          // then issue a token to the user 
          // with a message
          let token = jwt.sign({ email: data.email }, 'keyboard cat 4 ever', { expiresIn: 24 * 60 * 60 } );
          res.json({successs: true, token: token});
        } else {
          // otherwise let the client know
          // that they have a bad password
          res.status(400).json({ err: "Password Doesn't Match", success: false, token: null })
        }
      });
    }).catch(err => res.status(400).json(false));
  });

  // app.use(function(req, res, next) {

  //   // check header or url parameters or post parameters for token
  //   const token = req.body.token || req.query.token || req.headers['x-access-token'];
  
  //   // decode token
  //   if (token) {
  
  //     // verifies secret and checks exp
  //     jwt.verify(token, 'secret', function(err, decoded) {      
  //       if (err) {
  //         return res.json({ success: false, message: 'Failed to authenticate token.' });    
  //       } else {
  //         // if everything is good, save to request for use in other routes
  //         req.decoded = decoded;    
  //         next();
  //       }
  //     });
  
  //   } else {
  
  //     // if there is no token
  //     // return an error
  //     return res.status(403).send({ 
  //         success: false, 
  //         message: 'No token provided.' 
  //     });
  
  //   }
  // });

  app.get("/", jwtMW,  (req, res) => {
//Sending some response when authenticated
    res.send('You are authenticated'); 
});

// Error handling 
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
      res.status(401).send(err);
  }
  else {
      next(err);
  }
});

}