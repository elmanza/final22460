let userApi = require("../components/users");
let clase42Api = require("../components/clase42");
let authApi = require("../components/auth");
let mediaApi = require("../components/media");

module.exports = app =>{
    userApi(app);
    clase42Api(app);
    authApi(app);
    mediaApi(app);

    app.get("/", (req, res)=> res.send("Todo ok!!!"));
}