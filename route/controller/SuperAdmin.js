/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:12:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: SuperAdmin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:30:19+08:00
 */

 function comntdelbyadmin(req, res) {
   res.send('comntdelbyadmin');
 }

 function blogdelbyadmin(req, res) {
   res.send('blogdelbyadmin');
 }

 function banuserbyadmin(req, res) {
   res.send('banuserbyadmin');
 }

 function cfdelcomnt(req, res) {
   res.send('cfdelcomnt');
 }

 function recovercomnt(req, res) {
   res.send('recovercomnt');
 }

 function cfdelblog(req, res) {
   res.send('cfdelblog');
 }

 function recoverblog(req, res) {
   res.send('recoverblog');
 }

 function assignadmin(req, res) {
   res.send('assignadmin');
 }

 function removeAdmin(req, res) {
   res.send('removeAdmin');
 }


 module.exports = {
   comntdelbyadmin,
   blogdelbyadmin,
   banuserbyadmin,
   cfdelcomnt,
   recovercomnt,
   cfdelblog,
   recoverblog,
   assignadmin,
   removeAdmin
 }
