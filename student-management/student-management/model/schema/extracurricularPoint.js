var mongoose=require('mongoose');

var extracurricularPoint=new mongoose.Schema({
    score:Number,
    semester:Number
})

module.exports=extracurricularPoint;