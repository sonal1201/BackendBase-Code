const CredRepo = require('./cred-repository')
const { City } = require('../models');

class CityRepository extends CredRepo {
    constructor() {
        super(City)   // super basic call the constructor of parent class 
    }

}


module.exports = CityRepository