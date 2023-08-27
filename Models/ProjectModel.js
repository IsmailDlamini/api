
import mongoose from "mongoose"


const projectSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        unique : true
    },

    image : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        Required : true,
    },

    github : {
        type : String,
        required : false,
    },

    stack : {
        type : [String],
        required : true,
        default : " ",
    },

    platform : {
        type : String,
        required : true
    },

    logos : {
        type : [String],
        required : true,
    },

    siteLink : {
        type : String,
        required : false,
        default : " ",
    },

    

}, {
    timestamps : true
})

const Project = mongoose.model("Project", projectSchema)

export default Project