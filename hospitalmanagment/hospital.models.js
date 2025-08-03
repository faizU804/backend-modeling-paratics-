import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    addressLine1 : {
        type  : String,
        required :true
    },
    addressLine2 : {
        type  : String,
        // required :true  doesnot need in secong adress
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },

    specializedIn : [
        {
            type  :String,
        }
    ],
    
    likes : [
        {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'Patient'       
    }
]

},{timestamps})


const Hospitals = mongoose.model("Hospital" , hospitalSchema)