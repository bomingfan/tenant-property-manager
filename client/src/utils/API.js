import axios from "axios";

export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },

//   Saves landlord information to the database
  saveLandlord: function(landlordData) {
    return axios.post("/landlord/new", landlordData);
  },

  // Return landlords for use
  getLandlord: function() {
    return axios.get("/api/landlord");
  },

  saveTenant: function(tenantData) {
    return axios.post("/tenant/new", tenantData);
  },

  getTicket: function(id) {
    return axios.get("/ticket/:id")
  },

  saveTicket: function(ticketData) {
    return axios.post("/ticket/new", ticketData);
  },

  saveBulletin: function(bData) {
    return axios.post("/bulletin/new", bData);
  },

  getBulletin: function(id) {
    return  axios.get("/api/bulletin/" + id)
  }
};