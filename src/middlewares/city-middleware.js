
async function vaildateCheck(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "city name cannot be empty",
        })
    }

    next();
}

module.exports = { vaildateCheck }