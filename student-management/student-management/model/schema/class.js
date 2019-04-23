var mongoose=require('mongoose');

var Class=new mongoose.Schema({
    className:String,
    monitor:{
        type:mongoose.Types.ObjectId,
        ref:'student'
    },
    faculty:{
        type:mongoose.Types.ObjectId,
        ref:'faculty'
    },
    size:Number
})

module.exports=Class;