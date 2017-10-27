/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:04:34+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var blogSchema = new Schema({
     uid: { type: ObjectId, ref: 'users' },
     anonymous: { type: Boolean, default: true },
     content: {
       text: String,
       iamges: [String]
     },
     meta: {
       likeNum: { type: Number, default: 0 },
       comment: [{
         type: ObjectId,
         ref: 'comments'
       }]
     },
     isReported: { type: Boolean, default: false },
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
     },
     movedToTop: { type: Boolean, default: false}
 })

 module.exports = mongoose.model('Blog', blogSchema);
