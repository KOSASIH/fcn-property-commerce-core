const express = require('express');
const router = express.Router();
const propertyService = require('../services/propertyService');

router.get('/properties', async (req, res) => {
  const properties = await propertyService.getProperties();
  res.json(properties);
});

router.post('/properties', async (req, res) => {
  const property = await propertyService.createProperty(req.body);
  res.json(property);
});

module.exports = router;
