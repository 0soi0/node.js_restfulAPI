var express = require('express');
const Connection = require('mariadb/lib/connection');
const { escape } = require('mariadb/lib/misc/utils');
var router = express.Router();

//db연결
const db = require('../server/mariadb').conn;
const selectRepository = require('../server/selectRepository');

//test용 쿼리
router.get('/sido-code', function(req, res) {
  selectRepository.select_sido_code().then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is : '+err);
  })
});

//지역별 점포보기
router.get('/sido/store', function(req,res) {
  let requestCode = req.query.code;

  requestCode = requestCode.split(' ');
  var sql = 'SELECT s.id,s.name,c.sido from store_info s INNER JOIN sido_code c ON(s.code=c.code) WHERE c.code= ' + db.escape(requestCode[0]);
  for(i=1; i<requestCode.length; i++) {
      sql = sql+' || c.code='+db.escape(requestCode[i]);
  };

  db.query(sql, function(err, rows) {
      if(!err){
        console.log("===========================");
        console.log(rows);
        console.log("===========================")
        res.send(rows);
      } else {
        console.log("err : ", err);
      }
  });
});

//지역별 매출보기(월기준)
router.get('/sido/sales', function(req,res) {
    let requestCode = req.query.code;
    let requestMonth = req.query.month;

    requestCode = requestCode.split(' ');
    requestMonth = requestMonth.split(' ');

    var sql = 'SELECT c.sido,sum(d.sale) as sales from (SELECT * from sales WHERE month(date)='+db.escape(requestMonth[0])
    for(i=1; i<requestMonth.length; i++) {
        sql = sql+' || month(date)='+db.escape(requestMonth[i]);
    };
    sql= sql+') d INNER JOIN store_info s ON(d.id=s.id) INNER JOIN sido_code c ON(s.code=c.code) WHERE c.code = ' + db.escape(requestCode[0]);

    for(i=1; i<requestCode.length; i++) {
        sql = sql+' || c.code='+db.escape(requestCode[i]);
    };
    sql= sql+' GROUP BY c.code';

    db.query(sql, function(err, rows) {
        if(!err){
          console.log("===========================");
          console.log(rows);
          console.log("===========================")
          res.send(rows);
        } else {
          console.log("err : ", err);
        }
    });
    
});

//날짜별로 가게의 매출 현황보기
router.get('/sido-code', function(req, res) {
  db.query('select code,sido from sido_code;', function(err, rows, fields) {
    if(!err){
      console.log("===========================");
      console.log(rows);
      console.log("===========================")
      res.send(rows);
    }
    else {
      console.log("err : ", err);
    }
  });
});

//날짜별로 가장높은 매출의 가게보기
router.get('/sido-code', function(req, res) {
  db.query('select code,sido from sido_code;', function(err, rows, fields) {
    if(!err){
      console.log("===========================");
      console.log(rows);
      console.log("===========================")
      res.send(rows);
    }
    else {
      console.log("err : ", err);
    }
  });
});

module.exports = router;