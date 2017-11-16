/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T10:11:51+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Admin.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:50:24+08:00
 */
 var CommentModel = require('../../models/Comment');
 var BlogModel = require('../../models/Blog');
 var UserModel = require('../../models/User');


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

 function userbanbyadmin(req, res) {
   // TODO:
 }

 function comntdelbyadmin(req, res) {
   // TODO:
 }

 function blogdelbyadmin(req, res) {
   // TODO:
 }


 function unrepblog(req, res) {
   var data = req.body;
   BlogModel.findOneAndUpdate({_id: ObjectId(ata.blogId)}, {isReported: false}, function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been unreported.')
     }
   })
 }

 function unrepcmnt(req, res) {
   var data = req.body;
   CommentModel.findOneAndUpdate({_id: ObjectId(ata.blogId)}, {isReported: false}, function(err ,data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this comment has been unreported.')
     }
   })
 }

 function recovercomnt(req, res) {
   // TODO:
 }

  function recoverblog(req, res) {
    // TODO:
  }

 module.exports = {
   delcommentbyadmin,
   delblogbyadmin,
   banuser,
   freeuser,
   userbanbyadmin,
   comntdelbyadmin,
   blogdelbyadmin,
   unrepblog,
   unrepcmnt,
   recovercomnt,
   recoverblog
 }
