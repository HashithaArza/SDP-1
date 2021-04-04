const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/SDP'

const app = express()
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected.....')
})
app.use(express.json())
const TravelDetailsRouter = require('./routers/TravelDetails')
app.use('/TravelDetails',TravelDetailsRouter)

 app.listen(9000,() => {
     console.log('server Started')
 })