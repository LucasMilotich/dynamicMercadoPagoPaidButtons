'use strict';
module.exports = function(app) {
  var itemList = require('../controllers/itemController');

  app.route('/items')
    .get(itemList.list_all_items)
    .post(itemList.create_an_item);

  app.route('/items/:productCode')
    .get(itemList.read_an_item_by_ProductCode)
    .put(itemList.update_an_item)
    .delete(itemList.delete_an_item);
};
