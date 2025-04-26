const express = require("express");
const v1Route = require("./v1");

const apiRoute = express.Router();

apiRoute.use('/v1', v1Route)

module.exports = apiRoute