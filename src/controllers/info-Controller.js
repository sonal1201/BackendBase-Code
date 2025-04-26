const { StatusCodes } = require("http-status-codes")

async function info(req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Hello pong",
        error: {},
        data: {}
    })
}

module.exports = { info }