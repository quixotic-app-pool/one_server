/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:24+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T16:15:04+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var commentSchema = new Schema({
     from_uid: { type: ObjectId, ref: 'users' },
     to_uid: { type: ObjectId, ref: 'users' },
     anonymous: { type: Boolean, default: true },
     meta: {
       likeNum: { type: Number, default: 0 }
     },
     created_info: {
       time: {
    		 type   : Date,
    		 default: Date.now(),
    	 },
       device: { type: String, default: null },
       location: {
         latitude: { type: Number, default: null },
         longitude: { type: Number, default: null },
         locationName: { type: String, default: '' }
       }
     }
    })
 module.exports = mongoose.model('Comment', commentSchema);
