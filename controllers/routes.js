const express = require('express');
const router = express.Router();
//import burger.js model
const burger = require('../models/burger.js');

//create routes

router.get('/', function (req, res){
  burger.selectAll(function(burger_data){
    console.log(burger_data);
    res.render('index', {burger_data});
  })

})

router.post('/burgers', function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});
// router.put('/burgers/:id', function(req,res){
//   burger.update(req.body.burger_id, function(result){
//     if burger.update({
//       devoured: true
//     }, condition, function(data){
//       console.log(result);
//       res.redirect('/');
//     })
//
//   });
// });



//export routes for server.js
module.exports = router;
