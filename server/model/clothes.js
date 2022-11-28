const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
    clotType: { type: String },
    gender: { type: String },
    brand: { type: String },
    model: { type: String },
    price: { type: String },
    amount: { type: String },
    isShort: { type: Boolean },
    isDrifeet: { type: Boolean },
    clothesPic: { type: String }
},
{
    timestamps:true,
})
module.exports= mongoose.model("clothes",clothesSchema)