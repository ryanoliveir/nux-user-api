const database = require('./db')
const User= require('./models/Users/users')
const UserManager= require('./models/UserPrivileges/user_privileges')

const conectionCheck = async function(req, res){
    try{
        await database.authenticate();
        await database.sync();
        res.json({"message": "Connection sucessfull!!!"});
    }catch(err){
        res.json({"message":"Connection Failure: " + err.message})
    }


}



module.exports = {
    conectionCheck
}