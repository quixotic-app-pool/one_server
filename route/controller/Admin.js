/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:11:51+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Admin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T12:18:58+08:00
 */

 function delcomment(req, res) {
   res.send('delcomment');
 }

 function delblog(req, res) {
   res.send('delblog');
 }

 function banuser(req, res) {
   res.send('banuser');
 }

 function freeuser(req, res) {
   res.send('freeuser');
 }

 function comntdelbyme(req, res) {
   res.send('comntdelbyme');
 }

 function blogdelbyme(req, res) {
   res.send('blogdelbyme');
 }

 function userbanbyme(req, res) {
   res.send('userbanbyme');
 }


 module.exports = {
   delcomment,
   delblog,
   banuser,
   freeuser,
   comntdelbyme,
   blogdelbyme,
   userbanbyme
 }
