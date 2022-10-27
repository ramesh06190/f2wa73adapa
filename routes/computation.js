var express = require('express');
var router = express.Router();
var x=Math.floor(Math.random()*5);

/* GET Computation page. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
  var y=Math.abs(x);
  res.render('computation', { title: 'Computing cube root of a number',content:`Math.cbrt() applied to ${y} is ${Math.cbrt(y)}`, content1:`\nMath.atan2() applied to ${y} is ${Math.atan2(y)}`,
  content3:`\nMath.atanh() applied to ${y} is ${Math.atanh(y)}`});
});

module.exports = router;
