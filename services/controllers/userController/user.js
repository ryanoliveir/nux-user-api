const database = require('../../database/db')
const User = require('../../database/models/Users/users')
const UserPrivilege = require('../../database/models/UserPrivileges/user_privileges')

const bcrypt = require('bcryptjs')

const dumpInfo = async(userID) => {
     
    return await User.findByPk(userID)
    
}


const updateInfo = async(nickName, emailAdress, userPassword, privilegeType, userStatus, userID) => {
    const data = []
    const user = await User.findByPk(userID)
    data.push(nickName, emailAdress, userPassword, privilegeType, userStatus)
    
    for(let index in data) {
        if(data[index] == undefined) {
            continue
        }else{
            switch(index){
                case "0":
                    user.nick_name = data[index]
                    user.save()
                    break


                case "1":
                    user.email = data[index]
                    user.save()
                    break


                case "2":
                    user.user_password = await bcrypt.hash(String(data[index]), 10)
                    user.save()
                    break

                    
                case "4":
                    user.user_status = data[index]
                    user.save()
                    break
                
                    
                default:
                    console.log("undefined")
                    break
            }
        }
    } 
}

module.exports = {
    dumpInfo,
    updateInfo,
}