const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);

        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function getAllAirplanes() {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw error;
    }
}

async function getAirplaneByid(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        if (!airplane) {
            throw console.error("Airplane by this id not found");
        }
        return airplane
    } catch (error) {
        throw error;
    }

}

async function deleteAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id);
        if (!airplane) {
            throw console.error("Airplane by this id not found");
        }
        return airplane;
    } catch (error) {
        throw error;
    }
}



module.exports = { createAirplane, getAllAirplanes, getAirplaneByid, deleteAirplane }