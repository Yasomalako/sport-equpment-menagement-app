const mongoose  = require("mongoose")

const nationalTeams = new mongoose.Schema({
    id:{type:String},
    teamName:{type:String}
},
{
    timestamps:true
    ,
})
module.exports =mongoose.model("nationalTeam",nationalTeams)