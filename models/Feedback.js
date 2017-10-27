/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T12:08:37+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Feedback.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T12:17:24+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var feedbackSchema = new Schema({
     fb_id: String,
     from_uid: String,
     content: String
 })
 module.exports = mongoose.model('Feedback', feedbackSchema);
