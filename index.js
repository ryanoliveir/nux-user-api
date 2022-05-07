const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



const database = require('./services/database/queries')

const session = require('./middlewares/auth_Autorization/session')
app.use(session)
const registerUser = require('./services/controllers/registercontroller/registerController')
const auth = require('./services/controllers/auth/authController')
const userProfile = require('./services/controllers/userController/userController')

app.get("/database", database.conectionCheck)
app.get("/users", database.getUsers)



app.use("/register", registerUser)
app.use("/auth", auth)
app.use("/profile", userProfile)

app.listen(80, function() {
    console.log('Listening on http://localhost/\n')
})
