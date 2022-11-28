const mongoose = require('mongoose')

const sportEquipment = new mongoose.Schema({
    id:{type:String},
    sportSpecialty:{type:String},
    productName:{type:String},
    company:{type:String},
    price:{type:String},
    amount:{type:String},
    id:{type:String}
},
{
    timestamps:true,
})