/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:33+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: User.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:50:42+08:00
 */


 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 const ObjectId = mongoose.Schema.Types.ObjectId

 var userSchema = new Schema({
     isSuperAdmin: { type: Boolean, default: false },
     isAdmin: { type: Boolean, default: false },
     isBanned: { type: Boolean, default: false },
     nickName: String,
     avatar: String,
     blogs: [{ type: ObjectId, ref: 'blogs' }],
     commentToOthers: [{ type: ObjectId, ref: 'comments' }],
     notification: [{ type: ObjectId, ref: 'notifications' }],
     screenUser: [ { type: ObjectId, ref: 'user' } ]
 })
 module.exports = mongoose.model('User', userSchema);
