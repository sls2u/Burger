const orm = require('../config/orm.js');

const burgers = {
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    })
  },
  updateOne:function(id,cb){
    orm.update('burgers',id,cb, function(res){
      cb(res);
    });
  },
  insertOne:function(name,cb){
    orm.create('burgers',name,cb, function(res){
      cb(res);
    });
  }

}
//export functions for controller folder
module.exports = burgers;
