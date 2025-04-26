const express = require("express");
const router = require("./infoRoute");

const v1Route = express.Router();

v1Route.use('/info', router)

module.exports = v1Route