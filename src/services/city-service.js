const { CityRepository } = require("../repositories");


const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);

        return city;
    } catch (error) {
        console.log(error)
        throw error;
    }
}


async function getAllcity() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function deleteCity(id) {
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = {
    createCity,
    deleteCity,
    getAllcity
}