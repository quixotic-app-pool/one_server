/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T12:07:30+08:00
 */


 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var blogSchema = new Schema({
     blog_id: String,
     author_uid: String,
     anonymous: Boolean,
     content: {
       text: String,
       iamges: String[]
     },
     likeNum: Number,
     dislikeNum: Number,
     comment: {
       commentNum: Number,
       commentList: String[],
     },
     isReported: {
       valid: Boolean,
       byUid: String,
     },
     isDeleted: {
       valid: Boolean,
       byUid: String
     },
     isElapsed: {
       valid: Boolean,
       elapseTime: Number
     },
     created_info: {
       time: Date,
       evice: String,
       location: {
         latitude: Number,
         longitude: Number,
         locationName: String
       }
     },
     movedToTop: Boolean
 })

 module.exports = mongoose.model('Blog', blogSchema);
