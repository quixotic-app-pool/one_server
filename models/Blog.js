/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-26T18:23:56+08:00
 */


 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var blogSchema = new Schema({
     blog_id: String,
     author: {
       uid: String,
       nickName: String,
       avatar: String
     },
     anonymous: Boolean,
     content: String,
     iamges: String[],
     commentNum: Number,
     likeNum: Number,
     dislikeNum: Number,
     comments: String[],
     created_time: Date,
     created_device: String,
     created_location: {
       latitude: Number,
       longitude: Number,
       locationName: String
     },
     isReported: {
       valid: Boolean,
       byUid: String,
     },
     isDeleted: {
       valid: Boolean,
       byUid: String
     }
     isElapsed: {
       valid: Boolean,
       elapseTime: Number
     },
     movedToTop: Boolean
 })

 module.exports = mongoose.model('Blog', blogSchema);
