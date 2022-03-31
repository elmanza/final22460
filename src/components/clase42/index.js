const { Router } = require("express");
const router = Router();
const clase42Controller = require("./controllers/clase42Controller");

module.exports = app =>{
    app.use("/clase42", router);
    
    router.get('/', clase42Controller.request);
    router.get('/fyh', clase42Controller.fyh);
    router.post('/ingreso', clase42Controller.ingreso);
    router.get('/egreso', clase42Controller.egreso);
}