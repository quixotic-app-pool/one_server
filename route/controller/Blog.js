/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:22:40+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:28:36+08:00
 */
 var BlogModel = require("../../models/Blog");
 const limitNum = 10;

 function fetchlist(req, res) {
   var pageNum = req.body.pageNum;
   var option: {
     "limit": limitNum,
     "skip": limitNum * pageNum,
     "sort": "uid"
   }
   BlogModel.find({}, option, function(err, docs){
     if(err) {
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.json(blog);
     }
   })
 }

 function blogdetail(req, res) {
   var data = req.body;
   BlogModel.findById( ObjectId(data.blogId), function(err, docs){
     if(err) {
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.json(blog);
     }
   })
 }

 function userbloglist(req, res) {
   var data = req.body;
   var option: {
     "limit": limitNum,
     "skip": limitNum * pageNum,
     "sort": "uid"
   }
   BlogModel.find( {uid: ObjectId(data.user.uid)}, option, function(err, docs){
     if(err) {
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.json(blog);
     }
   })
 }

//create new blog
 function newblog(req, res) {
   var data = req.body;
   var blogEntity = new BlogModel({
         uid: data.uid,
         anonymous: data.anonymous,
         content: data.content,
         created_info: data.created_info,
         movedToTop: data.movedToTop | false
   })
   blogEntity.save(function(err, docs){
       if(err) console.log(err);
       console.log('保存成功：' + docs);
   })
   BlogModel.find(function(err, blog) {
   // if there is an error retrieving, send the error otherwise send data
       if (err){
         res.send("Sorry, this operation failed, please try again.")
       } else {
         res.json(blog);
       }
    })
  }

 function delblog(req, res) {
   var data = req.body;
   BlogModel.findByIdAndRemove( ObjectId(data.blogId), {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been successfully deleted.')
     }
   })
 }

 function repblog(req, res) {
   var data = req.body;
   BlogModel.findByIdAndUpdate( ObjectId(data.blogId), {isReported: true}, {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been reported.')
     }
   })
 }

 function updbloglike(req, res) {
   var data = req.body;
   BlogModel.findByIdAndUpdate( ObjectId(data.blogId), { $inc: { "meta.likeNum": data.like }}, {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog likeNum has been updated.')
     }
   })
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
