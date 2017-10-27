/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:11:51+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Admin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:05:52+08:00
 */
 var CommentModel = require('../models/Comment');
 var BlogModel = require('../models/Blog');
 var UserModel = require('../models/User');


 function delcommentbyadmin(req, res) {
   var data = req.body;
   if(data.user.isAdmin | data.user.isSuperAdmin) {
      CommentModel.findOne({_id: ObjectId(data.commentId)}, function(err, doc){
        if(err) {
          res.send("Sorry, this operation failed, please try again.")
        } else {
          res.send("Great, this comment has been successfully deleted.")
        }
      })
   } else {
     res.send("Sorry, you don't have right to take this action.")
   }
 }

 function delblogbyadmin(req, res) {
   var data = req.body;
   if(data.user.isAdmin | data.user.isSuperAdmin) {
      BlogModel.findOne({_id: ObjectId(data.blogId)}, function(err, doc){
        if(err) {
          res.send("Sorry, this operation failed, please try again.")
        } else {
          res.send("Great, this blog has been successfully deleted.")
        }
      })
   } else {
     res.send("Sorry, you don't have right to take this action.")
   }
 }

 function banuser(req, res) {
   var data = req.body;
   if(data.user.isAdmin | data.user.isSuperAdmin) {
      UserModel.findOneAndUpdate({_id: ObjectId(data.user.uid)}, {isBanned: true}, function(err, doc){
        if(err) {
          res.send("Sorry, this operation failed, please try again.")
        } else {
          res.send("Great, this user has been successfully banned.")
        }
      })
   } else {
     res.send("Sorry, you don't have right to take this action.")
   }
 }

 function freeuser(req, res) {
   var data = req.body;
   if(data.user.isAdmin | data.user.isSuperAdmin) {
      UserModel.findOneAndUpdate({_id: ObjectId(data.user.uid)}, {isBanned: false}, function(err, doc){
        if(err) {
          res.send("Sorry, this operation failed, please try again.")
        } else {
          res.send("Great, this user has been free now.")
        }
      })
   } else {
     res.send("Sorry, you don't have right to take this action.")
   }
 }

 function unrepblog(req, res) {
   var data = req.body;
   BlogModel.findOneAndUpdate({_id: ObjectId(ata.blogId)}, {isReported: false}, {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been unreported.')
     }
   })
 }

 module.exports = {
   delcommentbyadmin,
   delblogbyadmin,
   banuser,
   freeuser,
   unrepblog
 }
