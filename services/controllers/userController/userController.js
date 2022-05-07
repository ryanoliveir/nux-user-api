const  express = require('express');
const router = require('express').Router()
const User = require('../../database/models/Users/users')

const authMiddleware = require('../../../middlewares/auth_Autorization/auth_autorization')
const user = require('./user')

router.use(authMiddleware)


router.get('/user', async (req, res) => {
    const userID = req.session.userid

    const current_user = await user.dumpInfo(userID)

    res.send(current_user)
})

router.post("/update", async (req, res) => {
    const { nickName, emailAdress, userPassword, privilegeType, userStatus } = req.body
    const session = req.session
    
    await user.updateInfo(nickName, emailAdress, userPassword, privilegeType, userStatus, session.userid)

    res.status(200).end()
})


module.exports = router