const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const exphbs = require('express-handlebars');
const http = require('http');
const path = require('path');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
const routes = require('./controllers/routes.js');
app.use('/', routes);
app.get('/', (req, res)=>{
  res.send(router)
})

// Starts the server to begin listening
// =============================================================
app.listen(3000);
console.log("listening")
