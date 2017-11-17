/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T11:38:03+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 const ObjectId = mongoose.Schema.Types.ObjectId

 var blogSchema = new Schema({
     content: {
       text: String,
       images: [String]
     },
     user: { uid: { type: ObjectId, default: null}, gender: { type: String, default: 'male' }, avatar: { type: String, default: ''} },
     category: { type: String, default: ''},
     isanonymous: { type: Boolean, default: true },
     likeNum: { type: Number, default: 0 },
     comments: [{
       type: ObjectId,
       ref: 'Comment'
     }],
     isReported: { type: Boolean, default: false },
     created_info: {
       time: {
    		 type   : String,
    		 default: '',
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
