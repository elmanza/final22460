const { Router } = require("express");
const router = Router();
const mediaController = require("./controllers/mediaController");
const uploadFileMiddleware = require("./middlewares/uploadFileMiddleware")

module.exports = app =>{
    app.use("/media", router);
    
    router.get('/', (req, res, next)=>{
        res.send("Sirve la url en media");
    });

    router.post('/uploadService', [uploadFileMiddleware.uploadFile()], mediaController.uploadResource);
}