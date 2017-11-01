/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:12:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: SuperAdmin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T11:47:31+08:00
 */
 var UserModel = require("../../models/User")

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

 function recovercomnt(req, res) {
   // TODO:
 }

 function cfdelblog(req, res) {
   // TODO:
 }

 function recoverblog(req, res) {
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
   comntdelbyalladmin,
   blogdelbyalladmin,
   banuserbyalladmin,
   cfdelcomnt,
   recovercomnt,
   cfdelblog,
   recoverblog,
   assignadmin,
   removeAdmin
 }
