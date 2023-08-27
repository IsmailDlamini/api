
import mongoose from "mongoose"


const aboutSchema = mongoose.Schema({

    number : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true
    },

    github : {
        type : String,
        required : true
    }

},{
    timestamps : true
}
)

const Contact = mongoose.model("Contact", aboutSchema)

export default Contact
