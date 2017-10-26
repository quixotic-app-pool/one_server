/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:56+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Session.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-26T18:24:08+08:00
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var sessionSchema = new Schema({
     _session: String,
     openId: String,
     uid: String
 })
 module.exports = mongoose.model('Session', sessionSchema);
