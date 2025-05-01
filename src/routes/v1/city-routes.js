const express = require('express');
const { cityController } = require('../../controllers');
const { cityMiddleware } = require('../../middlewares');

const cityRoute = express.Router();

cityRoute.post('/', cityController.createCity);
cityRoute.delete('/:id', cityController.deleteCity);
cityRoute.get('/', cityController.getAllcity);

module.exports = cityRoute