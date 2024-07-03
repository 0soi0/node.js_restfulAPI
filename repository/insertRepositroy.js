const db = require('../server/mariadb').conn

//가게 정보 입력
exports.store = function(name,code) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO store_info VALUES(?,?,?)',[0,name,code],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}

//가게 매출 입력
exports.sales = function(id,date,sale) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO sales VALUES(?,?,?)',[id,date,sale],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}