'use strict';
module.exports = function(app) {
  var linkList = require('../controllers/linkController');

  //linkList Routes
  app.route('/links')
    .get(linkList.list_all_links)
    .post(linkList.create_a_link);


  app.route('/links/:productCode')
    .get(linkList.read_a_link_by_ProductCode)
    .put(linkList.update_a_link)
    .delete(linkList.delete_a_link);
};
