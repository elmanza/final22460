const RequestService = require("../services/clase42rService");

class Request {
    async request(req, res, next){
        try {
            let response = await RequestService.request();
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async fyh(req, res, next){
        try {
            let response = await RequestService.fyh();
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async ingreso(req, res, next){
        try {
            console.log(req.body);
            let response = await RequestService.ingreso(req.body.num);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async egreso(req, res, next){
        try {
            let response = await RequestService.egreso();
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Request();