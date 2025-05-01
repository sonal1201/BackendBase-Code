
const { cityService } = require("../services");

async function createCity(req, res) {

    try {
        const city = await  cityService.createCity({name: req.body.name})

        return res.status(200).json({
            success: true,
            message: "Successfully added a new city",
            data: city,
            error: {},

        })

    } catch (error) {
        return res.status(409).json({
            success: false,
            message: "something went wrong while adding new city",
            error: error,
            data: {}
        })
    }
}


async function deleteCity(req,res){
    try {
        const city = await  cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted a city",
            data: city,
            error: {},

        })
    } catch (error) {
        return res.status(409).json({
            success: false,
            message: "something went wrong while deleting the city",
            error: error,
            data: {}
        })
    }
}

async function getAllcity(req,res){
    try {
        const city = await  cityService.getAllcity(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched all city",
            data: city,
            error: {},

        })
    } catch (error) {
        return res.status(409).json({
            success: false,
            message: "something went wrong while fetching all the city",
            error: error,
            data: {}
        })
    }
}

module.exports = {
    createCity,
    deleteCity,
    getAllcity
}