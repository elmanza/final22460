let express = require("express");
let cors = require("cors");
let serverRoutes = require("./routes");
let path = require("path");
let cluster = require("cluster");
let numCPUs = require("os").cpus.length;
let { config } = require("./config");
class App {
    constructor(){
        this.app = express();
        this.port = config.port;
        this.settings();
        this.views();
        this.middlewares();
    }

    async settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static('public'));
    }

    async views(){
        this.app.set('views', path.join(__dirname, 'views', 'ejs'));
        this.app.set('view engine', 'ejs');;
    }

    async middlewares(){
        this.app.use(cors(`*`));
    }

    async routes(){
        serverRoutes(this.app);
    }

    async listen(){
        // if(cluster.isMaster){
        //     for (let i = 0; i < numCPUs; i++) {
        //         cluster.fork();                
        //     }
        //     cluster.on("exit", (worker, corde, signal)=>{
        //         console.log(`Worker dead ${worker.process.pid}`);
        //         cluster.fork();
        //     })
        // }else{
        //     this.app.listen(this.port, err=>{
        //         console.log(`Server on http://localhost:${this.port}`)
        //     })
        // }

        this.app.listen(this.port, err=>{
            console.log(`Server on http://localhost:${this.port}`)
        })
    }
}

module.exports = new App();