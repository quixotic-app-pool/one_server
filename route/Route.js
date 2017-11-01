/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T18:27:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Route.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T12:42:07+08:00
 */
 var express = require('express');
 var router = express.Router();
 var notificationCtrl = require('./controller/Notification');
 var commentCtrl = require('./controller/Comment');
 var blogCtrl = require('./controller/Blog');
 var notificationCtrl = require('./controller/Notification');
 var adminCtrl = require('./controller/Admin');
 var userCtrl = require('./controller/User');
 var adsCtrl = require('./controller/Ad');

 //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

//notification
router.get('api/notification', notificationCtrl.notification);
router.post('api/updnotification', notificationCtrl.updnotification);

//user
router.post('api/screenuser', userCtrl.screenuser);

//ads
router.post('api/ads', userCtrl.fetchads);

//comment
router.post('api/addcomment', commentCtrl.addcomment);
router.post('api/delcomment', commentCtrl.delcomment);
router.post('api/repcomment', commentCtrl.repcomment);
router.post('api/updcommentlike', commentCtrl.updcommentlike);

//blog
router.get('api/list', blogCtrl.fetchlist);
router.get('api/blogdetail', blogCtrl.blogdetail);
router.get('api/userbloglist', blogCtrl.userbloglist);
router.post('api/newblog', blogCtrl.newblog);
router.post('api/delblog', blogCtrl.delblog);
router.post('api/repblog', blogCtrl.repblog);
router.post('api/updbloglike', blogCtrl.updbloglike);

//admin
router.post('api/admin/delcommentbyadmin', adminCtrl.delcommentbyadmin);
router.post('api/admin/delblogbyadmin', adminCtrl.delblogbyadmin);
router.post('api/admin/banuser', adminCtrl.banuser);

module.exports = router;
