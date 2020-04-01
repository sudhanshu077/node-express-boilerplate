let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    userName : {type: String,trim: true,sparse:true, unique: true},
    firstName: {type: String, trim: true,sparse:true},
    lastName: {type: String, trim: true,sparse:true},
    password: {type: String,sparse:true, default:''},
    email: {type: String,sparse :true, unique: true},
    roleId: { type: Number, default: 3 }, // 1 for super admin 2 for  admin 3 for user
    deviceToken:{type:String,trim:true,default:''},
    deviceId:{type:String,trim:true,default:''},
    accessToken:{type:String,trim:true,sparse:true},
    otpCode: { type: Number },
    status: { type: Number, default: 3} // 1 for active // 2 for inactive // 3 for email verification pending
    
}, { timestamps: true })

module.exports = mongoose.model('User', User);