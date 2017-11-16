/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-02T15:14:55+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Movetotop.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:47:48+08:00
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 const ObjectId = mongoose.Schema.Types.ObjectId

 var mttchema = new Schema({
      blog_id:  [{ type: ObjectId, ref: 'blog' }]
 })
 module.exports = mongoose.model('Movetotop', mttchema);
