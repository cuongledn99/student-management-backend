var mongoose = require('mongoose');
var schema = require('./schema/index');

module.exports = {
  usersModel: mongoose.model('users', schema.users),
  facultyModel:mongoose.model('faculty',schema.faculty),
  lectureModel:mongoose.model('lecture',schema.lecture),
  scoreModel:mongoose.model('score',schema.score),
  scoreboardModel:mongoose.model('scoreboard',schema.scoreboard),
  subjectModel:mongoose.model('subject',schema.subject),
  subjectRegistrationModel:mongoose.model('subjectregistration',schema.subjectRegistration),
  userManagementModel:mongoose.model('usermanagement',schema.userManagement),
  ITDepartmentModel:mongoose.model('itdepartment',schema.ITDepartment),
  trainingDepartmentModel:mongoose.model('trainingdepartment',schema.trainingDepartment),
  ctsvModel:mongoose.model('ctsv',schema.ctsv),
  studentModel:mongoose.model('student',schema.student),
  scholarshipModel:mongoose.model('scholarship',schema.scholarship),
  classModel:mongoose.model('class',schema.class),
  feeModel:mongoose.model('fee',schema.fee),
  khtcModel:mongoose.model('khtc',schema.khtc)
}