let { User } = require("../../../models");
let https = require("https");
let fs = require("fs");
let axios = require("axios");
let nums = [];
class Request {
    async request(){
        let options2 = {
            hostname: "rickandmortyapi.com",
            port: 443,
            path: "/api",
            method: "GET"
        }
        console.log("lakhslkdaskdhlakshdlkshd");
        try {
            // const options = {
            //     hostname: 'rickandmortyapi.com',
            //     port: 443,
            //     path: '/api/episode',
            //     method: 'GET'
            //   };
              
            //   const req = https.request(options, (res) => {
            //     console.log('statusCode:', res.statusCode);
            //     console.log('headers:', res.headers);
              
            //     res.on('data', (d) => {
            //         fs.promises.appendFile("pruebaData.txt", `\n ${d}`);
            //       process.stdout.write(d);
            //     });
            //   });
              
            //   req.on('error', (e) => {
            //     console.error(e);
            //   });
            //   req.end();
            let res = await this.fyh();
            //   let res = await axios.get("http://localhost:3010/clase42/fyh", {name:"Andres"});
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async ingreso(num){
        try {
            nums.push(num);
            return nums;
        } catch (error) {
            console.log(error);
        }
    }

    async egreso(){
        try {
            return nums;
        } catch (error) {
            console.log(error);
        }
    }

    async fyh(){
        try {
            let fecha = new Date().toDateString();
            console.log(fecha);
            return {FyH: fecha};
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Request();