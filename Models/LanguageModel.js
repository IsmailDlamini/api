
import mongoose from "mongoose"


const languageSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    logo : {
        type : String,
        required : true,
    },

    percentage : {
        type : String,
        required : true,
    }
}, {
    timestamps : true
})

const Languages = mongoose.model("Languages", languageSchema)

export default Languages