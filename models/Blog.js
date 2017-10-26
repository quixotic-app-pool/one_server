/**
 * @Author: mymac
 * @Date:   2017-10-26T16:43:16+08:00
 * @Last modified by:   michaelchen
 * @Last modified time: 2017-10-26T17:13:15+08:00
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
     isReported: Boolean,
     elapseTime: Number
 })

 module.exports = mongoose.model('Blog', blogSchema);
