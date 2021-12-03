const mongoose = require("mongoose");


const businessSchema = new mongoose.Schema({
    title : {
        type:String
    },
    link : {
        type:String
    },
    content : {
        type: String
    },
    image : {
        type: String
    }
})

const Business = new mongoose.model("Business", businessSchema);


module.exports = Business;