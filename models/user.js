var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	Employee_Name: String,
	Employee_Company: String,
	Employee_ID:String,
	Joining_Date:Date,
	username: String,
	Password: String,
	passwordConf: String,
	email: String,
	Phoneno: Number,
	Department: String
	// Description: String,
	// Designation: String
	// Department_Name:String
}),
User = mongoose.model('User', userSchema);

module.exports = User;