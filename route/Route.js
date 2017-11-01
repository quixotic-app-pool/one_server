/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T18:27:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Route.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T12:30:27+08:00
 */
 var express = require('express');
 var router = express.Router();
 // var sectonCtrl = require('./controller/Section');
 // var conceptCtrl = require('./controller/Concept');
 // var feedbackCtrl = require('./controller/Feedback');
 var notificationCtrl = require('./controller/Notification');
 var commentCtrl = require('./controller/Comment');
 var blogCtrl = require('./controller/Blog');
 var notificationCtrl = require('./controller/Notification');
 var adminCtrl = require('./controller/Admin');
 var superAdminCtrl = require('./controller/SuperAdmin');
 var userCtrl = require('./controller/User');
 var adsCtrl = require('./controller/Ad');

 //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// //section
// router.post('api/requestnewsection', sectionCtrl.requestnewsection);
// router.get('api/sections', sectionCtrl.sections);
// //concept
// router.get('api/concepts', conceptCtrl.concepts);
// //feedback
// router.post('api/feedback', feedbackCtrl.feedback);

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
router.post('api/admin/freeuser', adminCtrl.freeuser);
router.get('api/admin/userbanbyadmin', adminCtrl.userbanbyadmin);
router.get('api/admin/comntdelbyadmin', adminCtrl.comntdelbyadmin);
router.post('api/admin/recovercomnt', adminCtrl.recovercomnt);
router.get('api/admin/blogdelbymadmin', adminCtrl.blogdelbyadmin);
router.post('api/admin/recoverblog', adminCtrl.recoverblog);
router.get('api/admin/unrepblog', adminCtrl.unrepblog);
router.get('api/admin/unrepcomnt', adminCtrl.unrepcomnt);

//superadmin
router.get('api/super/fetechalladmin', superAdminCtrl.fetechalladmin);
router.get('api/super/comntdelbyalladmin', superAdminCtrl.comntdelbyalladmin);
router.get('api/super/blogdelbyalladmin', superAdminCtrl.blogdelbyalladmin);
router.get('api/super/banuserbyalladmin', superAdminCtrl.banuserbyalladmin);
router.post('api/super/cfdelcomnt', superAdminCtrl.cfdelcomnt);
router.post('api/super/cfdelblog', superAdminCtrl.cfdelblog);
router.post('api/super/assignadmin', superAdminCtrl.assignadmin);
router.post('api/super/removeadmin', superAdminCtrl.removeadmin);

module.exports = router;
