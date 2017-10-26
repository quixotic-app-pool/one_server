/**
 * @Author: mymac
 * @Date:   2017-10-26T16:43:56+08:00
 * @Last modified by:   michaelchen
 * @Last modified time: 2017-10-26T17:20:27+08:00
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var sessionSchema = new Schema({
     _session: String,
     openId: String,
     uid: String
 })
 module.exports = mongoose.model('Session', sessionSchema);
