//importmy sql connection object
const connection = require('./connection.js');

//function to generate mysql syntax
const orm = {
  //function to return all  table entries
  selectAll: function(tableInput, cb){

    connection.query('select* from '+tableInput+';', function(err, result){
      if(err) throw err;
      cb(result);
    })
  },
  updateOne: function(tableInput,condition,cb){
    connection.query('UPDATE' +tableInput+'SET devoured=true WHERE id='+condition+';', function(err,result){
      if(err)throw err;
      cb(result);

    })
  },

  insertOne: function(tableInput,val,cb){
    connection.query('INSERT INTO'+tableInput+ "(burger_name) VAULES ('"+val+"');", function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
}


 module.exports = orm;
