'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  productCode: {
    type: String,
    required: 'Kindly enter the productCode'
  },
  productName: {
    type: String,
    required: 'Kindly enter the productName'
  },
  buttonTitle: {
    type: String,
    required: 'Kindly enter the buttonTitle'
  },
  buttonQuantity: {
    type: Number,
    required: 'Kindly enter the buttonQuantity'
  },
  buttonPrice: {
    type: Number,
    required: 'Kindly enter the buttonPrice'
  },
  buttonLink: {
    type: String,
    required: 'Kindly enter the buttonLink'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Links', LinkSchema);
