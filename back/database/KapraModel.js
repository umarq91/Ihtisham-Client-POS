const mongoose = require('mongoose');

const KapraSchema = new mongoose.Schema({
    name: String,
    supplier: String,
    than: Number,
    meter: Number,
    purchaserate:Number,
    rate: Number,
}, {
    timestamps: true // Enable timestamps
});

module.exports = mongoose.model('Kapra', KapraSchema);
