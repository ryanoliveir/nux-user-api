const database = require('../../database/db')
const User = require('../../database/models/Users/users')
const UserPrivilege = require('../../database/models/UserPrivileges/user_privileges')



const bcrypt = require('bcryptjs')

const registerUser = async (nickName, emailAdress, userPassword, privilegeType, userStatus) => {
    console.log(nickName, emailAdress, userPassword, privilegeType, userStatus)

    
    User.create({
        nick_name: nickName,
        email: emailAdress,
        user_password: await bcrypt.hash(String(userPassword), 10),
        user_status: userStatus
    })
    await database.sync()

    const user = await User.findOne({ where :{email: emailAdress}})
            


    UserPrivilege.create({
        id_credencial: user.id_user,
        privilege_category: privilegeType

    })

    await database.sync()
    
    const privilege = await UserPrivilege.findOne({where: {id_credencial: user.id_user}})    
    
    switch (privilege.privilege_category) {
        case "root":
            user.privilege = "1"
            user.save()
            break

        case "admin":
            user.privilege = "2"
            user.save()
            break

        case "geral":
            user.privilege = "3"
            user.save()
            break
    }

    await database.sync()
    
}

const removeUser = async (nickName) => {
    
    const user = await User.findOne({where: {nick_name: nickName}})
    
    if (user){
    await UserPrivilege.destroy({where: {id_credencial: user.id_user}})
        await User.destroy({where: {nick_name: nickName}})
        let message = "User has been removed!"
        return message

    }else{
        let message = "User not find!"
        return message
    }

}

module.exports = {
    registerUser, 
    removeUser
}