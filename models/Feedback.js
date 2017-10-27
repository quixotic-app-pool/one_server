/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T12:08:37+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Feedback.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T16:15:08+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var feedbackSchema = new Schema({
     from_uid: { type: ObjectId, ref: 'users' },
     content: String
 })
 module.exports = mongoose.model('Feedback', feedbackSchema);
