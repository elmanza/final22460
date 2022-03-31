let axios = require("axios");
const { response } = require("express");

(async ()=>{
    try {
        let res = await axios.get("http://localhost:3010/clase42/fyh", {name:"Andres"});
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
})();