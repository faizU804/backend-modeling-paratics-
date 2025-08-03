import mongoose from "mongoose";


const medicalRecordSchema = new mongoose.Schema({},{timestamps})


const MedicalRecord = mongoose.model("MedicalRecord" , medicalRecordSchema)