var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aqua', { title: 'Search Results aqua' });
});

module.exports = router;