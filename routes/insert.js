var express = require('express');
var router = express.Router();

const insertRepository = require('../repository/insertRepositroy');

//가게정보 기입
router.post('/store', function(req, res) {
  let name = req.body.name;
  let code = req.body.code;
  insertRepository.store(name,code).then((result) => {
    res.send(JSON.stringify({
      bool : 1
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      bool : 0
    }));
  })
});

//가게 매출정보 기입
router.post('/store/sales', function(req, res) {
  let id = req.body.id;
  let date = req.body.date;
  let sale = req.body.sale;
  insertRepository.store_sales(id,date,sale).then((result) => {
    res.send(JSON.stringify({
      bool : 1
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      bool : 0
    }));
  })
});

module.exports = router;