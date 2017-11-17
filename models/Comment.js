/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:24+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T11:37:55+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 const ObjectId = mongoose.Schema.Types.ObjectId

 var commentSchema = new Schema({
     content: { type: String, default: '' },
     blog_id:  { type: ObjectId, ref: 'Blog' },
     from_uid: { type: ObjectId, ref: 'User' },
     replyTo_id: { type: ObjectId, ref: 'Comment' },
     isAnonymous: { type: Boolean, default: true },
     likeNum: { type: Number, default: 0 },
     time: {
  		 type   : String,
  		 default: '',
  	 }
    })
 module.exports = mongoose.model('Comment', commentSchema);
