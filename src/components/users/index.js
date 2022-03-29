const { Router } = require("express");
const router = Router();
const userController = require("./controllers/userController");

module.exports = app =>{
    app.use("/user", router);
    
    router.get('/', userController.getAll);
    router.post('/', userController.create);
}