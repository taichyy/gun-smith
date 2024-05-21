import mongoose from "mongoose";

const {Schema} = mongoose

const brandSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    CHName:{
        type: String,
        required: false,
    },
},{ 
    timestamps: true 
})

module.exports = mongoose.models.Brand || mongoose.model('Brand', brandSchema);
