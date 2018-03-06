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
    }).catch(err => res.status(422).json(err))
  });

  // See the react auth blog in which cors is required for access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3001');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
  next();
});

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever'
});

  // POST route for landlord login
  app.post("/llogin", function (req, res) {
    db.Landlord.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (data) {
      // if user not found, return authentication failed.
      if(!data) {
        res.status(401).send('Authentication failed. User not found.' );
      } else 
      // we are comparing the plain text password 
      // with the hashsed password here
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        // if the hash and the plain text password match
        if (result) {
          // then issue a token to the user 
          // with a message
          let token = jwt.sign({ email: data.email, id: data.id, firstname: data.firstname }, 'keyboard cat 4 ever', { expiresIn: 10 * 60 } );
          res.json({successs: true, token: token});
        } else {
          // otherwise let the client know
          // that they have a bad password
          res.status(400).json({ message: "Password Doesn't Match", success: false, token: null })
        }
      });
    })
  });


}