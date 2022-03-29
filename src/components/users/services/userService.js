let { User } = require("../../../models");


class Users {
    async getAll(){
        try {
            return await User.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            return await User.create({...obj});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Users();