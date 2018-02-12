// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new post
  app.post("/api/tenant", function(req, res) {
    db.Tenant.create(req.body).then(function(dbTenant) {
      res.json(dbTenant);
    });
  });

  app.post("/api/landlord", function(req, res) {
    db.Landlord.create(req.body).then(function(dbLandlord) {
      res.json(dbLandlord);
    });
  });



}