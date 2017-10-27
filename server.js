/**
 * @Author: MichaelChen <michaelchen>
 * @Date:   2017-10-26T16:39:43+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: server.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T10:22:43+08:00
 */

 //mongoose对数据库基本操作，够用了
 // http://www.jianshu.com/p/2f54b90efe15

 var express  = require('express');
 var mongoose = require('mongoose');
 var app      = express();
 var database = require('./config/Database');
 // 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
 var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
 var route = require('./route/Route');

 //Routes
 app.use(route);


 // cors 解决跨域, wx-audio 有跨域example
 var cors = require('cors');

 const session = require('express-session');
 const passport = require('./config/passport');
 const flash = require('connect-flash');


 app.use(session({ secret: 'secretkey', resave: false, saveUninitialized: false })); // 参数的说明请参考文档，saveUninitialized 和 resave一般设置为false
 app.use(passport.initialize());
 app.use(flash());

 var port     = process.env.PORT || 8080;
 app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
 app.use(bodyParser.json());                                     // parse application/json

 // data model
 var ArticleModel = require('./models/Article');
 var BlogModel = require('./models/Blog');

 var data = require('./dummy.json');

 var db = mongoose.connect(database.url);

 //数据库连接状态
 db.connection.on("error", function (error) {
     console.log("数据库连接失败：" + error);
 });

 db.connection.on("open", function () {
     console.log("数据库连接成功");
 })

 db.connection.on('disconnected', function () {
     console.log('数据库连接断开');
 })

 var init = function(){
     data.forEach(function(item){
       var instance = new ArticleModel({
         title: item.title,
         body: item.body
       })
       instance.save(function(err){
         if(err) {
           throw err;
         }
         console.log('User saved successfully!');
       })
     })
 }

 // init();

  app.get('/', function(req, res){
    res.send('server is up and running!')
  })
  app.get('/api/article', function(req, res) {
     // use mongoose to get all todos in the database
     ArticleModel.find(function(err, article) {
     // if there is an error retrieving, send the error otherwise send data
     if (err){
       res.send(err)
     } else {
       res.json(article);
     }
     });
    });


  app.get('/api/blog', function(req, res) {
     // use mongoose to get all todos in the database

     var blogEntity = new BlogModel({
     title:  "other",
     author: "L",
     body:   "Documents are instances of out model. Creating them and saving to the database is easy",
     comments: [{ body: "It's very cool! Thanks a lot!", date: "2014.07.28" }],
     hidden: false,
     meta: {
         votes: 100,
         favs:  99
       }
     })
     blogEntity.save(function(err, docs){
         if(err) console.log(err);
         console.log('保存成功：' + docs);
     })

     BlogModel.find(function(err, blog) {
     // if there is an error retrieving, send the error otherwise send data
     if (err){
       res.send(err)
     } else {
       res.json(blog);
     }
     });
    });


  //同时插入多条
    app.get('/api/mutipleblogs', function(req, res) {
       // use mongoose to get all todos in the database

       BlogModel.insertMany([
        {title: "mongoose1", author: "L"},
        {title: "mongoose2", author: "L"}
        ], function(err, docs){
            if(err) console.log(err);
            console.log('保存成功：' + docs);
          });

       BlogModel.find(function(err, blog) {
       // if there is an error retrieving, send the error otherwise send data
       if (err){
         res.send(err)
       } else {
         res.json(blog);
       }
       });
      });

  //查
  app.get('/api/findblogs', function(req, res) {
     // use mongoose to get all todos in the database

     BlogModel.find({title: "Mongoose", 'meta.votes': 100}, {title: 1, 'meta.favs': 1, 'comments.body': 1}, function(err, docs){
        if(err) console.log(err);
        console.log('查询结果：' + docs);
        res.json(docs);
      })
    });

  //查找并只返回第一个查询记录。
    app.get('/api/findoneblog', function(req, res) {
       // use mongoose to get all todos in the database

       BlogModel.findOne({title: "Mongoose", 'meta.votes': 100}, {title: 1, 'meta.favs': 1, 'comments.body': 1}, function(err, docs){
          if(err) console.log(err);
          console.log('查询结果：' + docs);
          res.json(docs);
        })
      });

  //查找并只返回第一个查询记录。
  // app.get('/api/findoneblog', function(req, res) {
  //    // use mongoose to get all todos in the database
  //
  //    BlogModel.findById(id, function(err, docs){
  //       if(err) console.log(err);
  //       console.log('查询结果：' + docs);
  //       res.json(docs);
  //     })
  //   });

  //更新原来词条
  app.get('/api/updateblog', function(req, res) {
    BlogModel.update({title: "Mongoose"}, {author: "L"}, {multi: true}, function(err, docs){
        if(err) console.log(err);
        console.log('更改成功：' + docs);
        res.json(docs);
    })
  });


  //删除o开头的title的词条
  app.get('/api/deleteblog', function(req, res) {
    BlogModel.remove({title: /^o/}, function(err, docs){
        if(err) console.log(err);
        console.log('更改成功：' + docs);
        res.json(docs);
    })
  });

  //以下是用于测试passport
  app.get('/ppt', (req, res) => {
      let sess = req.session;
      sess.other = 'something else';
      console.log(`session id is: ${sess.id}`)
      console.log(JSON.stringify(sess));
      res.json(sess);
  });


 app.listen(port);
 console.log("App listening on port : " + port);
