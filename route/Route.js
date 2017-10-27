/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-26T18:27:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Route.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:40:02+08:00
 */
 var express = require('express');
 var router = express.Router();
 var sectonCtrl = require('./controller/Section');
 var conceptCtrl = require('./controller/Concept');
 var feedbackCtrl = require('./controller/Feedback');
 var notificationCtrl = require('./controller/Notification');
 var commentCtrl = require('./controller/Comment');
 var blogCtrl = require('./controller/Blog');
 var notificationCtrl = require('./controller/Notification');
 var adminCtrl = require('./controller/Admin');
 var superAdminCtrl = require('./controller/SuperAdmin');

 //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

//normal actions
//section
router.post('api/requestnewsection', sectionCtrl.requestnewsection);

router.get('api/sections', sectionCtrl.sections);

//concept
router.get('api/concepts', conceptCtrl.concepts);

//feedback
router.post('api/feedback', feedbackCtrl.feedback);

//notification
router.get('api/notification', notificationCtrl.notification);
router.post('api/updnotification', notificationCtrl.updnotification);

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

//admin action
//admin
router.post('api/admin/delcomment', adminCtrl.delcomment);

router.post('api/admin/delblog', adminCtrl.delblog);

router.post('api/admin/banuser', adminCtrl.banuser);

router.post('api/admin/freeuser', adminCtrl.freeuser);

router.get('api/admin/comntdelbyme', adminCtrl.comntdelbyme);

router.get('api/admin/blogdelbyme', adminCtrl.blogdelbyme);

router.get('api/admin/userbanbyme', adminCtrl.userbanbyme);

//superadmin
router.get('api/super/comntdelbyadmin', function(req, res) {
  res.send('commentDeletedByAdmin');
});

router.get('api/super/blogdelbyadmin', superAdminCtrl.blogdelbyadmin);

router.get('api/super/banuserbyadmin', superAdminCtrl.banuserbyadmin);

router.post('api/admin/cfdelcomnt', superAdminCtrl.cfdelcomnt);

router.post('api/admin/recovercomnt', superAdminCtrl.recovercomnt);

router.post('api/super/cfdelblog', superAdminCtrl.cfdelblog);

router.post('api/super/recoverblog', superAdminCtrl.recoverblog);

router.post('api/super/assignadmin', superAdminCtrl.assignadmin);

router.post('api/super/removeadmin', superAdminCtrl.removeadmin);

module.exports = router;
