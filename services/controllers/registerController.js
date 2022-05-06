const router = require('express').Router();
const express = require('express');

const database = require('../database/db')
const User = require('../database/models/Users/users')
const UserPrivilege = require('../database/models/UserPrivileges/user_privileges')

const bcrypt = require('bcryptjs')


router.use(express.urlencoded({ extended: true }))




router.post('/root', async (req, res) => {
    const { nickName, emailAdress, userPassword, privilegeType, UserStatus="off" } = req.body;

    const register = async () => {
        console.log(nickName, emailAdress, userPassword, privilegeType, UserStatus)
    
        
        User.create({
            nick_name: nickName,
            email: emailAdress,
            user_password: await bcrypt.hash(String(userPassword), 10),
            
            user_status: UserStatus
        })
        await database.sync()
    
        const user = await User.findOne({ where :{email: emailAdress}})
        console.log(user.id_user)
        console.log(privilegeType)
    
        try {
            await UserPrivilege.create({
                id_credencial: user.id_user
            })
            
        } catch (error) {
            console.log(error)
        }
    
        //UserPrivilege.create({
        //    id_credencial: user.id_user
        //})

        await database.sync()
    }
    await register();

    res.status(200).end()
    
})


module.exports = router;