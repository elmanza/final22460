const MediaServices = require("../services/mediaService");


class Media {
    async loginController(req, res, next){
        try {
            const { username, password } = req.body;
            if(!username || !password) throw new Error("Completa toda la información porfa!");
            const response = await MediaServices.login(username, password);
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    }

    async uploadResource(req, res, next){
        try {
            console.log("3) ajsbdlkasbdlkaskldaklsdn");
            const response = await MediaServices.uploadResource(req.body, req.files);
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Media();