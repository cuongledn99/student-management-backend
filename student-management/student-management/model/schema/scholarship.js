var mongoose=require('mongoose');

var scholarship=new mongoose.Schema({
    money:Number,
    approvedBy:{
        type:mongoose.Types.ObjectId,
        ref:'ctsv'
    },
    studentID:{
        type:mongoose.Types.ObjectId,
        ref:'student'
    }
})

module.exports=scholarship;