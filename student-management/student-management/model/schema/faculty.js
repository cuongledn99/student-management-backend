var mongoose = require('mongoose');
var faculty=new mongoose.Schema({
    facultyName:{
        type:String,
        required:true
    },
    openedDate:Date

});

module.exports=faculty;