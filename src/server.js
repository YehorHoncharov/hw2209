const moment = require("moment")
const express = require('express')
const path = require("path")

const app = express()

const HOST = 'localhost'
const PORT = 8000


app.use('/static/', express.static(path.join(__dirname, 'static')))

function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
})

app.get('/date', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/date.html"))
    getDate()
})

app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})