const { airPlaneService } = require('../services')


async function createAirplane(req, res) {
    try {
        const airplane = await airPlaneService.createAirplane({
            flightModel: req.body.flightModel,
            capacity: req.body.capacity
        })

        return res.status(200).json({
            success: true,
            message: "Successfully fetched all Airplane",
            error: {},
            data: airplane
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "something went wrong while creating the flight",
            error: error,
            data: {}
        })
    }

}

async function getAllAirplanes(req, res) {
    try {
        const airplane = await airPlaneService.getAllAirplanes();

        return res.status(200).json({
            success: true,
            message: "Successfully created Airplane",
            error: {},
            data: airplane
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "something went wrong while getting the flight",
            error: error,
            data: {}
        })
    }
}

async function getAirplaneByid(req, res) {
    try {
        const airplane = await airPlaneService.getAirplaneByid(req.params.id)

        return res.status(200).json({
            success: true,
            message: "Successfully fetched the Airplane",
            error: {},
            data: airplane
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success: false,
            message: "something went wrong while getting the flight",
            error: error,
            data: {}
        })
    }
}


async function deleteAirplanebyId(req, res) {
    try {
        const airplane = await airPlaneService.deleteAirplane(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted the Airplane",
            error: {},
            data: airplane
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "something went wrong while deleting the airplane",
            error: error,
            data: {}
        })
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplaneByid,
    deleteAirplanebyId
}