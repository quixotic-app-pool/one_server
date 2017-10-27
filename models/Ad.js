/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T16:43:45+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Ad.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T16:01:25+08:00
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var adSchema = new Schema({
     content: {
       text: String,
       images: String[]
     }
 })
 module.exports = mongoose.model('Ad', adSchema);
