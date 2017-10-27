/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:14:17+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Notification.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:20:54+08:00
 */

 function notification(req, res) {
   res.send('notification');
 }

 function updnotification(req, res) {
   res.send('updnotification');
 }

 module.exports = {
   notification,
   updnotification
 }
