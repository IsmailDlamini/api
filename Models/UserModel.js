import { Timestamp } from "mongodb"
import mongoose from "mongoose"


const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        isAdmin : {
            type : Boolean,
            default : "false",
            required : false
        },
        name : {
            type : String,
            required : false,
            default : "Site user"
        }
    },
    {
        timestamps : true
    }
)


const User = mongoose.model("User", userSchema)

export default User
