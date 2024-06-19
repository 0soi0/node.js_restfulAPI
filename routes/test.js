var express = require('express');
var router = express.Router();

/* GET users listing. */
// 200 = sucess 400 = error
router.get('/get/username', function(req, res, next) {

    let username = req.query.username;

    if(username == null || username.length === 0) {
        res.send(JSON.stringify({
            code : 400,
            message : 'missing parameter'
        }));

        return;
    }

    res.send(JSON.stringify({
        code : 200,
        yourname : username
    }));
});

router.post('/post/register', function(req, res, next) {

    let username = req.body.username;
    
    if (username == null || username.length === 0) {
    
    	res.send(JSON.stringify({
        	code : 400,
        	message : "missing parameter"
    	}));
        
        return;
    }

    res.send(JSON.stringify({
        code : 200,
        yourname : username
    }));
});

router.get('/get/custom_header', function(req, res, next) {

    res.writeHead(200, {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, DELETE',
        'Access-Control-Max-Age' : '3600',
        'Access-Control-Allow-Headers' : 'x-requested-with'
    });

    res.end('{"code" : 200, "result" : "ok"}')
});

module.exports = router;