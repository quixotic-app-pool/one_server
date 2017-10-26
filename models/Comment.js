/**
 * @Author: mymac
 * @Date:   2017-10-26T16:43:24+08:00
 * @Last modified by:   michaelchen
 * @Last modified time: 2017-10-26T17:15:12+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var commentSchema = new Schema({
     comment_id: String,
     from_uid: String,
     to_uid: String,
     anonymous: Boolean,
     created_time: Date,
     created_device: String,
     created_location: {
       latitude: Number,
       longitude: Number,
       locationName: String
     },
     likeNum: Number,
     dislikeNum: Number
 })
 module.exports = mongoose.model('Comment', commentSchema);
