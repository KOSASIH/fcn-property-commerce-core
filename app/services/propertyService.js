const Property = require('../models/property');

async function getProperties() {
  return await Property.find();
}

async function createProperty(propertyData) {
  return await Property.create(propertyData);
}

module.exports = {
  getProperties,
  createProperty
};
