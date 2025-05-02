const CredRepo = require('./cred-repository')
const { Airplane } = require('../models');

class AirplaneRepository extends CredRepo {
    constructor() {
        super(Airplane)   // super basic call the constructor of parent class 
    }

}


module.exports = AirplaneRepository