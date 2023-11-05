const mongoose = require('mongoose');

const RelationSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
    relation: String, // supplier or client
  },
  {
    timestamps: true, // Enable timestamps
  }
);

module.exports = mongoose.model('relations', RelationSchema);
