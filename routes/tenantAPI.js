// Requiring our models
const db = require("../models");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const exjwt = require('express-jwt');


// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/api/tenant", function(req, res) {
    db.Tenant.create(req.body).then(function(dbTenant) {
      res.json(dbTenant);
    });
  });

}