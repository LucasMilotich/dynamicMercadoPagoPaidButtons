'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  productCode: {
    type: String,
    required: 'Por favor agregar productCode'
  },
  productName: {
    type: String,
    required: 'Por favor agregar productName'
  },
  buttonTitle: {
    type: String,
    required: 'Por favor agregar buttonTitle'
  },
  buttonQuantity: {
    type: Number,
    required: 'Por favor agregar buttonQuantity'
  },
  buttonPrice: {
    type: Number,
    required: 'Por favor agregar buttonPrice'
  },
  buttonLink: {
    type: String,
    required: 'Por favor agregar buttonLink'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Links', LinkSchema);
