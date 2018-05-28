const mysql = require('mysql');
//create mysql connection object
var connection;

if(process.env.JAWSDB_URL) {
  //db jawsdb on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else{
  connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'Welcome123',
  database: 'burgers_db'
});
}

//connection to MySQL

connection.connect(function(err){
  if(err){
    console.error("error connecting:" + err.stack);
    return;
  }
  console.log('connect as id:'+connection.threadid);
})

//export connection for orm use
connection.connect();
module.exports = connection;
