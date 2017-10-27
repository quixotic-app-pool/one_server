/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T12:08:33+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Notification.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:53:58+08:00
 */
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var notificationSchema = new Schema({
      comment_id: { type: ObjectId, ref: 'comments' },
      from_uid: { type: ObjectId, ref: 'users' },
      to_uid: { type: ObjectId, ref: 'users' },
      isAted: {
         valid: { type: Boolean, default: false },
         to_comment_id: { type: ObjectId, ref: 'comments' }
      }
  })
  module.exports = mongoose.model('Notification', notificationSchema);
