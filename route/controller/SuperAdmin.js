/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:12:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: SuperAdmin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T12:28:52+08:00
 */
 var UserModel = require("../../models/User")

 function fetechalladmin(req, res) {
   // TODO:
 }

 function comntdelbyalladmin(req, res) {
   // TODO:
 }

 function blogdelbyalladmin(req, res) {
   // TODO:
 }

 function banuserbyalladmin(req, res) {
   // TODO:
 }

 function cfdelcomnt(req, res) {
   // TODO:
 }

 function cfdelblog(req, res) {
   // TODO:
 }

 function updateadmin(req, res) {
   var data = req.body;
   UserModel.findByIdAndUpdate( ObjectId(data.uid), { isAdmin: data.isAdmin }, {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       if(data.isAdmin){
          res.send('Great, this user has been granted as Admin.')
       } else {
          res.send('Oops, this user has been removed from Admin team.')
       }

     }
   })
 }

 function removeAdmin(req, res) {
   // TODO:
 }

 function comntdelbyadmin(req, res) {
   // TODO:
 }

 module.exports = {
   fetechalladmin,
   comntdelbyalladmin,
   blogdelbyalladmin,
   banuserbyalladmin,
   cfdelcomnt,
   cfdelblog,
   assignadmin,
   removeAdmin
 }
