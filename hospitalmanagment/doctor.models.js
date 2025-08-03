import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary :{
        type : String,
        required :true,
    },
    qualification : {
        type : String,
        required : true
    },
    experienceInYears : {
        type : Number,
        default : 0,
        required : true
    },
    worksInHospitals : [
        {
            type :mongoose.Schema.Types.ObjectId,
            ref : "Hospital"
        }
    ]

},{timestamps})


const Doctor = mongoose.model("Doctor" , doctorSchema)