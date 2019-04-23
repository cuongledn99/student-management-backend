var mongoose=require('mongoose');

var userManagement=new mongoose.Schema({
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'ITDepartment'
    },
    updatedBy:{
        type:mongoose.Types.ObjectId,
        ref:'ITDepartment'
    },
    createdDate:Date,
    updatedDate:Date,
    userID:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    }
})

module.exports=userManagement;