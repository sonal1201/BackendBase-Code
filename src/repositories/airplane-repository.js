const CredRepo = require('./cred-repository')
const { Flight } = require('../models');

class AirplaneRepository extends CredRepo {
    constructor() {
        super(Flight)   // super basic call the constructor of parent class 
    }

}


module.exports = AirplaneRepository