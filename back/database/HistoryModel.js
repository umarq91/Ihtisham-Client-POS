const mongoose = require('mongoose');

const RelationSchema = new mongoose.Schema(
  {
    name: String,
    billno:Number,
    than:Number,
    meter:Number,
    rate:Number,
    total:Number,
    purchaserate:Number,
    stock:String, // sale or purchase
    relation:String,  // supplier,client,
    personname:String,
  },
  {
    timestamps: true, // Enable timestamps
  }
);

module.exports = mongoose.model('History', RelationSchema);
