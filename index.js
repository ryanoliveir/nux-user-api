const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



const database = require('./services/database/queries')



app.get("/database", database.conectionCheck)



app.listen(80, function() {
    console.log('Listening on http://localhost:8080\n')
})
