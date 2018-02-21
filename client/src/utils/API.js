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

  // Return property for use
  getProperty: function(propertyData) {
    return axios.get("/api/property", propertyData);
  },

  saveTenant: function(tenantData) {
    return axios.post("/tenant/new", tenantData);
  },

  getTicket: function(tId) {
    return axios.get(`/ticket/${tId}`);
  },

  getLTicket:function(lId) {
    return axios.get(`/landlord/ticket/${lId}`)
  },

  saveTicket: function(ticketData) {
    return axios.post("/ticket/new", ticketData);
  },

  saveProperty: function(pData) {
    return axios.post("/property/new", pData);
  },

  showProperty: function(lId) {
    return axios.get(`/property/${lId}`);
  },

  getTProperty: function(id) {
    return axios.get(`/tproperty/${id}`);
  },

  changeBulltin: function(id) {
    return axios.put(`/property/${id}`);
  },

  getLId: function(tId) {
    return axios.get(`/findll/${tId}`);
  },

  deleteTicket: function(id) {
    return axios.delete(`/ticket/${id}`);
  }
};