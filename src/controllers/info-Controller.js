async function info(req,res) {
    return res.json({
        message: "Hello pong"
    })
}

module.exports = { info }