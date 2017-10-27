/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:24+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T12:07:15+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var commentSchema = new Schema({
     comment_id: String,
     from_uid: String,
     to_uid: String,
     anonymous: Boolean,
     likeNum: Number,
     dislikeNum: Number,
     isReported: {
       valid: Boolean,
       byUid: String
     },
     isDeleted: {
       valid: Boolean,
       byUid: String
     },
     created_info: {
       time: Date,
       evice: String,
       location: {
         latitude: Number,
         longitude: Number,
         locationName: String
       }
     }
 })
 module.exports = mongoose.model('Comment', commentSchema);
