const dotenv = require('dotenv')
dotenv.config()
require('../DB')
const express = require('express')
const app = express()
const port = 8989
const cors = require('cors')

app.use(express.json({express: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.listen(port,()=>{
    console.log(`the server is connected to port ${port}`);
})