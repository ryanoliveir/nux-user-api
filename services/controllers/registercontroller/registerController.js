const router = require('express').Router();
const express = require('express');

//const database = require('../database/db')
//const User = require('../database/models/Users/users')
//const UserPrivilege = require('../database/models/UserPrivileges/user_privileges')
//
//const bcrypt = require('bcryptjs')
const root = require('./root')

router.use(express.urlencoded({ extended: true }))

//VERIFICAR DE É ROOT, FAZER MIDWARE PARA ISSO

router.post('/root', async (req, res) => {
    const { nickName, emailAdress, userPassword, privilegeType, userStatus } = req.body;

    root.registerUser(nickName, emailAdress, userPassword, privilegeType, userStatus )

    res.status(200).end()
    
})

router.delete('/root', async (req, res) => {
    const { nickName } = req.body

    
    let message = await root.removeUser(nickName)
    console.log(message)
    res.json({ "message": message })
    
    
})



module.exports = router;