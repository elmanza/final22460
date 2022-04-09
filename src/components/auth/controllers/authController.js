const AuthServices = require("../services/authService");


class Auth {
    async loginController(req, res, next){
        try {
            const { username, password } = req.body;
            if(!username || !password) throw new Error("Completa toda la información porfa!");
            const response = await AuthServices.login(username, password);
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    }

    async verifyTokenController(req, res, next){
        try {
            const { token } = req.body;
            if(!token) throw new Error("No enviaste el token");
            const response = await AuthServices.verifyToken(token);
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Auth();