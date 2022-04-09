let JWT  = require("../../../utils/JWT/JWTservice");
let userService = require("../../users/services/userService");
let Crypter  = require("../../../utils/crypter/crypterservice");
const { config } = require("../../../config");

class Auth {
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

    async verifyToken(token){
        try {
            let verication = await JWT.verify(token);
            if(!verication) throw new Error("Token invalid");
            console.log("OKNNKSOINOIN1OIN12  -->  ", token);
            const payload = await  JWT.decode(token);
            console.log("oaishdoiahidnaosidnioasnd ", payload);
            const user = await userService.get(payload.id);
            if(!user) throw new Error("Ete token no le pertenece a ningun usuario");
            return user;
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = new Auth();