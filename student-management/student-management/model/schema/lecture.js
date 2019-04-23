var mongoose = require('mongoose');

var lecture=new mongoose.Schema({
    facultyID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'faculty'
    },
    academicRank:String
})

module.exports=lecture;