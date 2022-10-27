var express = require('express');
var router = express.Router();
var x=Math.floor(Math.random()*5);

/* GET Computation page. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
  var y=Math.abs(x);
  var y1=Math.cbrt(x);
  var y2=Math.atan2(x);
  var y3=Math.atanh(x);
  res.render('computation', { title: 'Computing cube root of a number',content:`Math.cbrt() applied to ${x} is ${Math.cbrt(x)}`});
});

module.exports = router;
