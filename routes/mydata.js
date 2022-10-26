var express = require('express');
var router = express.Router();

/* GET my page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'PYDI VENKATA SATYA RAMESH ADAPA' });
});

module.exports = router;
