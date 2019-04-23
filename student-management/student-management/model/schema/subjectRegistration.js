var mongoose=require('mongoose');

var subjectRegistration=new mongoose.Schema({
    registeredBy:{
        type:mongoose.Types.ObjectId,
        ref:'student'
    },
    approvedBy:{
        type:mongoose.Types.ObjectId,
        ref:'trainingDepartment'
    },
    subjectID:{
        type:mongoose.Types.ObjectId,
        ref:'subject'
    },
    semester:Number
})

module.exports=subjectRegistration;