const  express = require('express');

const router = require('express').Router()
const User = require('../../database/models/Users/users')
const bcrypt = require('bcryptjs');


router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.post("/authenticate", async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({where :{email: email}})

    if(!user) {
        req.session.userid = null;
        res.json({code: 401, error:"User not found"})
  
    }

    if(!await bcrypt.compare(password, user.user_password)){
        res.json({code: 401, error:"Password is incorrect"})
    }

    user.user_password = undefined;

    req.session.userid = user.id_user

    res.json({code: 200, session: req.session})
})

router.get("/logout", async (req, res) =>{
    req.session.destroy()
    res.send({message: "See you..."})
})

module.exports = router;