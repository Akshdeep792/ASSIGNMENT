const mongoose = require("mongoose");


const newsSchema = new mongoose.Schema({
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

const News = new mongoose.model("News", newsSchema);


module.exports = News;