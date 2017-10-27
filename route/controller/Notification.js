/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:14:17+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Notification.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:55:11+08:00
 */
 var NotificationModel = require("../../models/Notification");

 function notification(req, res) {
   var data = req.body;
   var notificationEntity = new NotificationModel({
       comment_id: data.comment_id,
       from_uid: data.from_uid,
       to_uid: data.to_uid,
   })
   notificationEntity.save(function(err, docs){
       if(err) console.log(err);
       console.log('保存成功：' + docs);
   })
   res.send("Notification saved.")
 }

 function updnotification(req, res) {
   var data = req.body;
   NotificationModel.findOneAndRemove( { _id: ObjectId(data.comment_id), to_uid: ObjectId(data.to_uid)}, {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this notification has been updated.')
     }
   })
 }

 module.exports = {
   notification,
   updnotification
 }
