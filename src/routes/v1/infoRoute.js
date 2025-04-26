const express = require("express");
const { infoController } = require("../../controllers");

const router = express.Router();

router.get('/', infoController.info)



module.exports = router