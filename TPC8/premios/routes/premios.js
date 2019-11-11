const mongoose = require('mongoose');

var laureatesSchema = new mongoose.Schema({});

var premioSchema = new mongoose.Schema({});

module.exports = mongoose.model('premio', premioSchema);
