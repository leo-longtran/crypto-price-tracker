const express = require('express');
const router = express.Router();
const priceRoutes = require('../api/price');

router.use('/price', priceRoutes);

module.exports = router;