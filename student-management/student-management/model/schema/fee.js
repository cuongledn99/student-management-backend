var mongoose=require('mongoose');

var fee=new mongoose.Schema({
    money:Number,
    semester:Number,
    studentID:{
        type:mongoose.Types.ObjectId,
        ref:'student'
    },
    status:String,
    collectedBy:{
        type:mongoose.Types.ObjectId,
        ref:'khtc'
    }
})

module.exports=fee;