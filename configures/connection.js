const mongoose = require('mongoose')
const { setServers } = require('node:dns').promises
setServers(["1.1.1.1", "8.8.8.8"])

mongoose.connect('mongodb+srv://zahralf37_db_user:zahra123@project1.wgobyav.mongodb.net/testauth')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting:', err))


module.exports = mongoose