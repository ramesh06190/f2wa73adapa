var express = require('express');
var router = express.Router();
var x=Math.random();

/* GET my page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'Computing cube root of a number',content:`Math.cbrt() applied to ${x} is ${Math.cbrt(x)}`});
});

module.exports = router;
