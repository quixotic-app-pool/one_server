/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:22:40+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:35:34+08:00
 */

 function fetchlist(req, res) {
   res.send('fetchList');
 }

 function blogdetail(req, res) {
   res.send('blogdetail');
 }

 function userbloglist(req, res) {
   res.send('userbloglist');
 }

 function newblog(req, res) {
   res.send('newblog');
 }

 function delblog(req, res) {
   res.send('delblog');
 }

 function repblog(req, res) {
   res.send('repblog');
 }

 function updbloglike(req, res) {
   res.send('updbloglike');
 }

 module.exports = {
   fetchlist,
   blogdetail,
   userbloglist,
   newblog,
   delblog,
   repblog,
   updbloglike
 }
