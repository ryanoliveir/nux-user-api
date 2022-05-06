const router = require('express').Router();
const express = require('express');

//const database = require('../database/db')
//const User = require('../database/models/Users/users')
//const UserPrivilege = require('../database/models/UserPrivileges/user_privileges')
//
//const bcrypt = require('bcryptjs')
const registerRoot = require('./root')

router.use(express.urlencoded({ extended: true }))



router.post('/root', async (req, res) => {
    const { nickName, emailAdress, userPassword, privilegeType, userStatus } = req.body;

    registerRoot(nickName, emailAdress, userPassword, privilegeType, userStatus )

    res.status(200).end()
    
})



module.exports = router;