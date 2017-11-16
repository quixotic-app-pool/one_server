/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T12:08:33+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Notification.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:52:22+08:00
 */
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  const ObjectId = mongoose.Schema.Types.ObjectId

  var notificationSchema = new Schema({
      comment_id: { type: ObjectId, ref: 'comment' }
  })
  module.exports = mongoose.model('Notification', notificationSchema);
