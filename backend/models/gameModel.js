const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    points:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Game', gameSchema)