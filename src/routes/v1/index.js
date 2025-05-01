const express = require("express");
const router = require("./infoRoute");
const airplaneRouter = require("./airplane-route");
const cityRoute = require("./city-routes");

const v1Route = express.Router();

//  /api/v1/airplane/  
v1Route.use('/airplane', airplaneRouter)
//  /api/v1/city/
v1Route.use('/city',cityRoute)

v1Route.use('/info', router)

module.exports = v1Route