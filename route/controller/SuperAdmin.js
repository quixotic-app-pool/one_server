/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:12:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: SuperAdmin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T18:01:09+08:00
 */
 var UserModel = require("../../models/User")

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


 module.exports = {
   assignadmin,
   removeAdmin
 }
