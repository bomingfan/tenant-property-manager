// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/bulletin/new", function(req, res) {
    db.Bulletin.create(req.body)
    .then(function(dbBulletin) {
      res.json(dbBulletin);
    });
  });

  

}