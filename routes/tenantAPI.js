// Requiring our models
const db = require("../models");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const exjwt = require('express-jwt');


// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/tenant/new", function(req, res) {
    db.Tenant.create(req.body).then(function(dbTenant) {
      res.json(dbTenant);
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
  secret: 'Tenant Rocks'
});

  // POST route for landlord login
  app.post("/tlogin", function (req, res) {
    db.Tenant.findOne({
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
          let token = jwt.sign({ email: data.email }, 'Tenant Rocks', { expiresIn: 24 * 60 * 60 } );
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