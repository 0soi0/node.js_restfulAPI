var express = require('express');
var router = express.Router();

const patchRepository = require('../repository/patchRepository');

router.patch('/store', function(req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let code = req.body.code;
    if(!name == null && !code == null) {
        patchRepository.store(id,name,code).then((result) => {
          res.send(JSON.stringify({
            code : 201
          }));
        }).catch((err) => {
          res.send(JSON.stringify({
            code : 400
          }));
        })
    } else if (name == null) {
        patchRepository.storeCode(id,code).then((result) => {
            res.send(JSON.stringify({
              code : 201
            }));
          }).catch((err) => {
            res.send(JSON.stringify({
              code : 400
            }));
          })
    } else if (code == null) {
        patchRepository.storeName(id,name).then((result) => {
            res.send(JSON.stringify({
              code : 201
            }));
          }).catch((err) => {
            res.send(JSON.stringify({
              code : 400
            }));
          })
    }
  });

module.exports = router;