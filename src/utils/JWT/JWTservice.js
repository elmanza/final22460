const jwt = require('jsonwebtoken');
const { config } = require('../../config');

class JWT {

    async verify (token){
        try {
            return await jwt.verify(token, config.authJwtService, {
                algorithm:  [config.algorithmToken]
            })
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async generate (payloadTokenData){
        try {
            return await  jwt.sign(payloadTokenData, config.authJwtService,{
                expiresIn: config.expireTimeToken *  1000 || 600000,
                algorithm: config.algorithmToken || 'HS26'
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    
    async decode (token){
        try {
            return await jwt.decode(token, config.authJwtService, {
                algorithm:  [config.algorithmToken]
            })
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = new JWT();