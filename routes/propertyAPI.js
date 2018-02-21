// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/property/new", function(req, res) {
    db.Property.create(req.body)
    .then(dbProperty => res.json(dbProperty))
    .catch(err => res.status(422).json(err));
  })

  // Get route for getting all record
  app.get("/api/property", function(req, res) {
    db.Property.findAll()
    .then(dbProperty => res.json(dbProperty))
    .catch(err => res.status(422).json(err));
  })
  

  // Get route for getting a record
  app.get("/property/:lId", function(req, res) {
      db.Property.findAll({
        where: {LandlordId : req.params.lId}
      })
      .then(dbProperty => res.json(dbProperty))
      .catch(err=> res.status(422).json(err));
  })

  // Get route for getting a record
  app.get("/tproperty/:id", function(req, res) {
    db.Property.findById(req.params.id)
    .then(dbProperty => res.json(dbProperty))
    .catch(err=> res.status(422).json(err));
})

app.get("/findll/:tId", function(req, res){
  db.Landlord.findAll({
    include: [
      {
        model: db.Property, 
        include: [{
          model: db.Tenant,
          where: {id: req.params.tId }
        }]  
      }
    ]
  }).then(dbJoin => res.json(dbJoin));
})

}