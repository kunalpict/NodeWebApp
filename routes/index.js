var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = JSON.stringify(req.headers);
  //res.clearCookie('dtve-tour-browse-two', { path: '/' });;
  res.cookie('dtve-tour-browse-two', false,{ path: '/users' });;
  res.render('index');
  //res.download('/public/1.docx');
});

/* GET home page. */
router.get('/json/index', function(req, res, next) {
  

  res.json({data:'test'});
});


module.exports = router;
