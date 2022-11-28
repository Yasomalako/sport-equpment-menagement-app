const mongoose = require('mongoose')

const shoesSchema = new mongoose.Schema({
    shoesModel:{type:String},
    brand:{type:String},
    prise:{type:String},
    amount:{type:Number},
    isOnSale:{type:Boolean},
    photo:{type:String},
    id:{type:String}
},
{
    timestamp:true
})

module.exports = mongoose.model("shoe",shoesSchema)
