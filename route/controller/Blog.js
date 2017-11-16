/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:22:40+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Blog.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T18:15:16+08:00
 */
 var CircularJSON = require('circular-json');

 var BlogModel = require("../../models/Blog");
 var MttModel = require("../../models/Movetotop");
 var Jimp = require("jimp");
 const limitNum = 10;

 function fetchlist(req, res) {
   var pageNum = req.body.pageNum;
   var option = {
     "limit": limitNum,
     "skip": limitNum * pageNum,
     "sort": "uid"
   }
   if(pageNum === 1) {
     var toplist = this.fetchmovetotoplist();
     var l = toplist.length;
     // TODO: 这里需要考虑第一次需要fetch toplist，并且补上剩下的几个空位
   }
   BlogModel.find({}, option, function(err, docs){
     if(err) {
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.json(blog);
     }
   })
 }


 function fetchmovetotoplist() {
   MttModel.find({}, function(err, data){
     if(err) {
       console.log("Sorry, this operation failed, please try again.")
     } else {
       return data
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
   var option = {
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
   console.log("trying to process new blog from server side...")
   var data = req.body.pack;
   var created_info = { device: data.device, location: { latitude: data.latitude || null, longitude: data.longitude || null, locationName: data.locationName || ''}}
   var blogEntity = new BlogModel({
         uid: data.uid,
         anonymous: data.anonymous,
         content: { text: data.content, images: data.images || [] },
         created_info: created_info,
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
   BlogModel.findByIdAndRemove( ObjectId(data.blogId), function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been successfully deleted.')
     }
   })
 }

 function repblog(req, res) {
   var data = req.body;
   BlogModel.findByIdAndUpdate( ObjectId(data.blogId), {isReported: true}, function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog has been reported.')
     }
   })
 }

 function updbloglike(req, res) {
   var data = req.body;
   BlogModel.findByIdAndUpdate( ObjectId(data.blogId), { $inc: { "meta.likeNum": data.like }}, function(err, data) {
     if (err){
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.send('Great, this blog likeNum has been updated.')
     }
   })
 }

 function uploadimage(data) {
   //here we need to ensure the data type from client side and continue
   // open a file called "lenna.png"
  Jimp.read("lenna.png", function (err, lenna) {
      if (err) throw err;
      lenna.resize(256, 256)            // resize
           .quality(60)                 // set JPEG quality
           .composite( src, x, y )     // composites another Jimp image over this image at x, y
           .write( path, uploadcb ); // Node-style callback will be fired when write is successful
  });
 }

 function uploadcb(err, data) {
   //here we need to send the static file path to client side and wrap up with other data, saving to database
   if(err) {
     console.log('fail to save image')
   } else {
     res.send(data)
   }
 }

 module.exports = {
   fetchlist,
   blogdetail,
   userbloglist,
   newblog,
   delblog,
   repblog,
   updbloglike,
   uploadimage
 }
