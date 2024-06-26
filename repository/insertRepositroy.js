const db = require('../server/mariadb').conn

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

exports.store_sales = function(id,date,sale) {
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