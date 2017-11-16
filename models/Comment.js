/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:24+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:45:34+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 const ObjectId = mongoose.Schema.Types.ObjectId

 var commentSchema = new Schema({
     blog_id:  { type: ObjectId, ref: 'blog' },
     from_uid: { type: ObjectId, ref: 'user' },
     to_comment_id: { type: ObjectId, ref: 'comment' },
     meta: {
       isanonymous: { type: Boolean, default: true },
       likeNum: { type: Number, default: 0 },
       isReported: { type: Boolean, default: false },
       created_info: {
         time: {
      		 type   : Date,
      		 default: Date.now(),
      	 }
       }
     }
    })
 module.exports = mongoose.model('Comment', commentSchema);
