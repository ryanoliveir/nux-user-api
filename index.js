const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



const database = require('./services/database/queries')

const registerUser = require('./services/controllers/registerController')

app.get("/database", database.conectionCheck)

app.use("/register", registerUser)


app.listen(80, function() {
    console.log('Listening on http://localhost/\n')
})
