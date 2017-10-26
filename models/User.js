/**
 * @Author: mymac
 * @Date:   2017-10-26T16:43:33+08:00
 * @Last modified by:   michaelchen
 * @Last modified time: 2017-10-26T17:18:34+08:00
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var userSchema = new Schema({
     isBoss: Boolean,
     isAdmin: Boolean,
     uid: String,
     nickName: String,
     avatar: String,
     blogs: String[],
     commentToOthers: String[],
     notification: [
       type: String,
       blog_id: String,
       comment_id: String,
       from_user: {
         uid: Number,
         avatar: String,
         anonymous: Boolean
       },
       comment_content: String,
       like: Number,
       comment_like: Number
     ]
 })
 module.exports = mongoose.model('User', userSchema);
