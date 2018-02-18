// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/bulletin/new", function(req, res) {
    db.Bulletin.create(req.body)
    .then(dbBulletin => res.json(dbBulletin))
    .catch(err => res.status(422).json(err));
  })

//   app.get("/api/bulletin/:id", function(req, res) {
//       db.Bulletin.findByID(req.params.id)
//       .then(dbBulletin => res.json(dbBulletin))
//       .catch(err=> res.status(422).json(err));
//   })

}