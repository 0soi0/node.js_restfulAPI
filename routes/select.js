var express = require('express');
var router = express.Router();

//repository연결
const selectRepository = require('../repository/selectRepository');

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

  selectRepository.sido_store(requestCode).then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is : '+err);
  })
});

//지역별 매출보기(월기준)
router.get('/sido/sales', function(req,res) {
    let requestCode = req.query.code;
    let requestMonth = req.query.month;

    selectRepository.sido_sales(requestCode,requestMonth).then((rows) => {
      res.send(rows);
    }).catch((err) => {
      console.log('error is : '+err);
    })
});

//날짜별로 가게의 매출 현황보기
router.get('/sales/store', function(req, res) {
  let requestId = req.query.id;
  let requestMonth = req.query.month;

  selectRepository.sales_store(requestId,requestMonth).then((rows) => {
    res.send(rows);
  }).catch((err) => {
    console.log('error is : '+err);
  })
});

module.exports = router;