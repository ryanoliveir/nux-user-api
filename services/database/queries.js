const database = require('./db')

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