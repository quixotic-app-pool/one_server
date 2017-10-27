/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:21:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:22:15+08:00
 */

 function addcomment(req, res) {
   res.send('addcomment');
 }

 function delcomment(req, res) {
   res.send('delcomment');
 }

 function repcomment(req, res) {
   res.send('repcomment');
 }

 function updcommentlike(req, res) {
   res.send('updcommentlike');
 }

 module.exports = {
   addcomment,
   delcomment,
   repcomment,
   updcommentlike
 }
