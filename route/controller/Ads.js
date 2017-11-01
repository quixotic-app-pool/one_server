/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-01T10:58:49+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Ads.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T11:02:06+08:00
 */

 var AdsModel = require("../../models/Ad")

 function fetchads(req, res) {
   AdsModel.find({}, function(err, data){
     if(err) {
       res.send("Sorry, this operation failed, please try again.")
     } else {
       res.json(data);
     }
   })
 }

 module.exports = {
   fetchads
 }
