/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:21:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T09:45:10+08:00
 */
var CommentModel = require("../../models/Comment")

 function addcomment(req, res) {
   var data = req.body;
   var commentEntity = new CommentModel({
       from_uid: data.from_uid,
       to_uid: data.todo_uid,
       anonymous: data.anonymous,
       created_info: data.created_info
   })
   commentEntity.save(function(err, docs){
       if(err) console.log(err);
       console.log('保存成功：' + docs);
   })
   var option= {
     limit: 10
   }
   CommentModel.find({}, option, function(err, comments) {
   // if there is an error retrieving, send the error otherwise send data
       if (err){
         res.send("Sorry, this operation failed, please try again.")
       } else {
         res.json(comments);
       }
    })
 }

 function delcomment(req, res) {
   var data = req.body;
   CommentModel.findByIdAndRemove( ObjectId(data.commentId), function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this comment has been successfully deleted.')
     }
   })
 }

 function updcommentlike(req, res) {
   var data = req.body;
   CommentModel.findByIdAndUpdate( ObjectId(data.commentId), { $inc: { "meta.likeNum": data.like }}, function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this comment likeNum has been updated.')
     }
   })
 }

 function repcomment(req, res) {
   // TODO:
 }

 module.exports = {
   addcomment,
   delcomment,
   updcommentlike,
   repcomment
 }
