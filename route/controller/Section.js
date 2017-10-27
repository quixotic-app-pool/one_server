/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-27T11:14:03+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Section.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-10-27T11:18:54+08:00
 */

function requestnewsection(req, res) {
  res.send('ask For New Section');
}

function sections(req, res) {
  res.send('fetch Sections success');
}

module.exports = {
  requestnewsection,
  sections
}
