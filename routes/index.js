var express = require('express');
var router = express.Router();

const maria = require('../server/mariadb'); //maria.js 경로 입력


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/select', function(req, res, next) { // /select 부분 추가
  maria.query('select * from exam', function(err, rows, fields) {
    if(!err){
      console.log("succ");
      res.send(rows);
    }
    else {
      console.log("err : ", err);
    }
  });
});

module.exports = router;