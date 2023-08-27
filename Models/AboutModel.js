
import mongoose from "mongoose";


const aboutSchema = mongoose.Schema({
    introduction : {
        type : String,
        required : true
    }
    ,

    services : {
        type : [String],
        required : true,
    }
}, {
    timestamps : true
})

const About = mongoose.model("About", aboutSchema)

export default About