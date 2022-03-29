let userApi = require("../components/users");


module.exports = app =>{
    userApi(app);

    app.get("/", (req, res)=> res.send("Todo ok!!!"));
}