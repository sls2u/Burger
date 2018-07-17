const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./controllers/routes.js');
const orm = require('./config/orm');


// Sets up the Express App
// =============================================================
const app = express();
// const app = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Routes
// =============================================================

app.use('/', routes);
app.get('/', function(req, res){
  res.send(req.params)
})

app.get('/test', function(req, res){
  orm.selectAll("burgers", function(result){
    res.send(result);

  })

})
//  app.post('/burger/create', function(req,res){
//    console.log(req);
//    res.send('hello');
// })

// POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// });

app.get('/', (req, res)=>{
  res.send('get burger')
})
  // .get(function (req, res) {
  //   console.log('working');
  //   res.send('get burger')
  // })
  .post(function (req, res) {
    res.send('add burger')
  })
  .put(function (req, res) {
    res.send('delete burger')
  })

// Starts the server to begin listening
// =============================================================
app.listen(3000);
console.log("listening")
