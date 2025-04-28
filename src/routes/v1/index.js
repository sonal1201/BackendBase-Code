const express = require("express");
const router = require("./infoRoute");
const airplaneRouter = require("./airplane-route");

const v1Route = express.Router();

//  /api/v1/create-airplane/   ----> createAirplane
v1Route.use('/airplane', airplaneRouter)

v1Route.use('/info', router)

module.exports = v1Route