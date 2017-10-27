/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T12:08:33+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Notification.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T12:17:30+08:00
 */
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var notificationSchema = new Schema({
      notif_id: String,
      type: String,
      type_id: String,
      from_uid: String,
      like: Number
  })
  module.exports = mongoose.model('Notification', notificationSchema);
