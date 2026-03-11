require('dotenv').config()
const express = require('express')                  //agar framework dapat digunakan (cara import express)
const mongoose = require('./configures/connection')
const app = express()                              // import method express
const port = 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded())

app.use('/', routes)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})