const express = require('express');
const { airplaneController } = require('../../controllers');

const airplaneRouter = express.Router();

airplaneRouter.post('/', airplaneController.createAirplane);
airplaneRouter.get('/', airplaneController.getAllAirplanes);

module.exports = airplaneRouter;