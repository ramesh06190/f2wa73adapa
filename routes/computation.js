var express = require('express');
var router = express.Router();


/* GET Computation page. */
router.get('/', function(req, res, next) {
  var x=Math.floor(Math.random() * 100);
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
  res.render('computation', { title: 'Computing cube root of a number',content:`Math.cbrt() applied to ${x} is ${Math.cbrt(x)}`});
});

module.exports = router;

