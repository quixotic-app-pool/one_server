/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:21:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Comment.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T12:16:59+08:00
 */
var CircularJSON = require('circular-json');
var CommentModel = require("../../models/Comment")
var BlogModel = require("../../models/Blog");
var dateFormat = require('dateformat');
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

 function addcomment(req, res) {
   var now = new Date();
   now = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
   var data = req.body.pack;
   var commentEntity = new CommentModel({
       content: data.content,
       blog_id: data.blogId,
       from_uid: data.from_uid,
       replyTo_id: data.replyTo_id,
       isAnonymous: data.isAnonymous,
       time: now
   })
   commentEntity.save(function(err, comment){
       if(err) console.log(err);
       console.log('评论保存成功：' + comment);
       BlogModel.findById(ObjectId(comment.blog_id), function(err, blog) {
         blog.comments.push(comment._id);
         blog.save(function(err, blog){
           console.log('评论更新后blog保存成功： ' + blog)
          //  BlogModel.findById(ObjectId(comment.blog_id)).populate('comments').exec(function(err, data){
          //    if(err) return err;
          //    console.log('updatedBlog: ' + data)
             res.send('bingo!')
          //  })
         })
       })

      //  BlogModel.findByIdAndUpdate(ObjectId(docs.blog_id), { $addToSet: { "comments.$ref": docs._id } }, {new: true}, function(err, data) {
      //    if (err){
      //      res.send("Sorry, this operation failed, please try again.")
      //    } else {
      //      console.log('Great, this blog likeNum has been updated.: ' + data)
      //      BlogModel.find( {'comments.$ref': 'comments'}, function(err, data) {
      //        console.log('ref work!: ' + data)
      //      })
      //    }
      //  })
   })
  //  var option= {
  //    limit: 10
  //  }
  //  CommentModel.find({}, option, function(err, comments) {
  //  // if there is an error retrieving, send the error otherwise send data
  //      if (err){
  //        res.send("Sorry, this operation failed, please try again.")
  //      } else {
  //        res.json(comments);
  //      }
  //   })
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
