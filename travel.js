const mongoose = require('mongoose')



const travelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Travel',travelSchema)