var mongoose=require('mongoose');

var subject=new mongoose.Schema({
    subjectName:String,
    numberOfCredit:Number,
    previousSubject:{
        type:mongoose.Types.ObjectId,
        ref:'subject'
    },
    facultyID:{
        type:mongoose.Types.ObjectId,
        ref:'faculty'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'trainingDepartment'
    },
    updatedBy:{
        type:mongoose.Types.ObjectId,
        ref:'trainingDepartment'
    },
    createdDate:Date,
    updatedDate:Date
})

module.exports.subject;