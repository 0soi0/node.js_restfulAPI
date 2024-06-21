var express = require('express');
var router = express.Router();

//db연결
const db = require('../server/mariadb').conn;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/select', function(req, res, next) { // /select 부분 추가
  db.query('select code,sido from sido_code;', function(err, rows, fields) {
    if(!err){
      console.log("===========================");
      for (i = 0, len = rows.length; i < len; i++) {
        console.log(`${rows[i].code} ${rows[i].sido}`);
      }
      console.log("===========================")
      res.send(rows);
    }
    else {
      console.log("err : ", err);
    }
  });
});

module.exports = router;