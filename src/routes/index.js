let userApi = require("../components/users");
let clase42Api = require("../components/clase42");

module.exports = app =>{
    userApi(app);
    clase42Api(app);

    app.get("/", (req, res)=> res.send("Todo ok!!!"));
}