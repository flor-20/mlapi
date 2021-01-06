const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
const search = require('./routes/search')

 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

//routing config
app.use('/api/search', search)


const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
