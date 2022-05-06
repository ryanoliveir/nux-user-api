const express = require('express');
const { get } = require('express/lib/response');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



const database = require('./services/database/queries')




app.get("/database", database.conectionCheck)



app.listen(8080, function() {
    console.log('Listening on http://localhost:8080\n')
})









