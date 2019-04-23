var mongoose=require('mongoose');

var score=new mongoose.Schema({
    score:Number,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'lecture'
    }
})

module.exports=score;