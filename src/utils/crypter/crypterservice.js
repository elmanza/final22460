const bcrypt = require('bcrypt');
const { config } = require('../../config');

class Bcrypt {

    async comparePasswords (firstpass, secondpass){
        try {
            return await bcrypt.compare(firstpass, secondpass)
        } catch (error) {
            console.log(error);
        }
    }

    async encryptPassword (plainPass){
        try {
            return await bcrypt.hash(plainPass, config.saltCrypt)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Bcrypt();