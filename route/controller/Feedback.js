/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:14:09+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Feedback.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T17:56:14+08:00
 */
 var FeedbackModel = require("../../models/Feedback");

  function feedback(req, res) {
    var data = req.body;
    var feedbackEntity = new FeedbackModel({
        from_uid: data.from_uid,
        content: data.content
    })
    feedbackEntity.save(function(err, docs){
        if(err) console.log(err);
        console.log('保存成功：' + docs);
    })
    res.send("Thanks for your feedback. Let's play together!")
  }

  module.exports = {
    feedback
  }
