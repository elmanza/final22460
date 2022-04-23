let JWT  = require("../../../utils/JWT/JWTservice");
let userService = require("../../users/services/userService");
let Crypter  = require("../../../utils/crypter/crypterservice");
const { config } = require("../../../config");

class Media {
    async login(username, password){
        try {
            let existUser = await userService.getUserByEmail(username);
            if(!existUser) throw new Error("Credenciales inválidas");
            const success = await Crypter.comparePasswords(password, existUser.password)
            if(!success) throw new Error("Contraseña inválida");
            const token = await JWT.generate({id: existUser.id});
            let response = {
                existUser,
                token,
                type: 'Bearer',
                expires_in: config.expireTimeToken
            }
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async uploadResource(body, files){
        try {
            console.log(body);
            console.log(files);
            return true;
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = new Media();