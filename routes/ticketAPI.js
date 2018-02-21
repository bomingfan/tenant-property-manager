// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new tenant
  app.post("/ticket/new", function(req, res) {
    db.Ticket.create(req.body).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  app.get("/ticket/:tId", function(req, res){
    db.Ticket.findAll({where: {TenantId: req.params.tId}})
    .then(dbTicket => res.json(dbTicket));
  })

  app.get("/landlord/ticket/:lId", function(req, res){
    db.Ticket.findAll({
      where: {LandlordId: req.params.lId}
    }).then(dbTicket => res.json(dbTicket));
  })

  app.delete("/ticket/:id", function(req, res){
    db.Ticket.destroy({
      where: {id: req.params.id}
    }).then(dbTicket => res.json(dbTicket));
  })

}