/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T18:27:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Route.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-17T22:04:40+08:00
 */
 var express = require('express');
 var dateFormat = require('dateformat');
 var crypto = require('crypto');
 var https = require('https');
 var CircularJSON = require('circular-json');
 //nnd，multer 比较娇贵，只能走这了
 var path = require('path')
 var Jimp = require("jimp");
 var multer = require('multer');
 var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, __dirname + '/../imageuploaded/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage })

 var router = express.Router();


 var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
 router.use(bodyParser.json());                                     // parse application/json
 router.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded


 var notificationCtrl = require('./controller/Notification');
 var commentCtrl = require('./controller/Comment');
 var blogCtrl = require('./controller/Blog');
 var adminCtrl = require('./controller/Admin');
 var userCtrl = require('./controller/User');
 var adsCtrl = require('./controller/Ads');

 //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('#################Welcome to server!######################')
  var now = new Date();
  console.log('Time: ', dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"));
  next();
});


//image files realted
router.post('/api/upload/image', upload.single('file'), function(req, res, next) {
  var filePath = __dirname + '/../imageuploaded/'
  var logoPath = __dirname + '/../assets/images/logo.png'
  var file= filePath + req.file.filename
  Jimp.read(file).then(function (img) {
      Jimp.read(logoPath).then(function(logoImg){
        img.resize(480, Jimp.AUTO)            // resize
           .quality(60)                 // set JPEG quality
           .composite(logoImg, 10 , 10)
           .write(file); // save
       })
    }).catch(function (err) {
       console.error(err);
   });
  var reply = { img: file}
  res.json(reply)
})

var token = "campusplan"; //此处需要你自己修改！
//wechat signature check
router.get('/api/wechatapi', function(req, res, next){
  var signature = req.query.signature;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;
  var echostr = req.query.echostr;

  /*  加密/校验流程如下： */
  //1. 将token、timestamp、nonce三个参数进行字典序排序
  var array = new Array(token,timestamp,nonce);
  array.sort();
  var str = array.toString().replace(/,/g,"");
  //2. 将三个参数字符串拼接成一个字符串进行sha1加密
  var sha1Code = crypto.createHash("sha1");
  var code = sha1Code.update(str,'utf-8').digest("hex");

  //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
  if(code === signature){
        res.send(echostr)
    }else{
        res.send("error");
    }
})

router.get('/api/wechatactivity', function(req, res){
      console.log('/api/wechatactivity: ' + req.query.code)
      // require to add appid
      // var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=?&secret=?&js_code=' + req.query.code + '&grant_type=authorization_code'
      https.get(url, function(data) {
        console.log('chunk: ' + CircularJSON.stringify(data))
      })
})


//notification
router.get('/api/notification', notificationCtrl.notification);
router.post('/api/updnotification', notificationCtrl.updnotification);

//user
router.post('/api/screenuser', userCtrl.screenuser);

//ads
router.get('/api/ads', adsCtrl.fetchads);

//comment
router.post('/api/addcomment', commentCtrl.addcomment);
router.post('/api/delcomment', commentCtrl.delcomment);
router.post('/api/repcomment', commentCtrl.repcomment);
router.post('/api/updcommentlike', commentCtrl.updcommentlike);

//blog
router.get('/api/list', blogCtrl.fetchlist);
router.get('/api/blogdetail', blogCtrl.blogdetail);
router.get('/api/userbloglist', blogCtrl.userbloglist);
router.post('/api/newblog', blogCtrl.newblog);
router.post('/api/delblog', blogCtrl.delblog);
router.post('/api/repblog', blogCtrl.repblog);
router.post('/api/updbloglike', blogCtrl.updbloglike);
router.post('/api/uploadimage', blogCtrl.uploadimage)

//admin
router.post('/api/admin/banuser', adminCtrl.banuser);

module.exports = router;
