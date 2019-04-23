var mongoose=require('mongoose');

var scoreboard=new mongoose.Schema({
    studentID:{
        type:mongoose.Types.ObjectId,
        ref:'student'
    },
    semester:Number
})

module.exports=scoreboard;