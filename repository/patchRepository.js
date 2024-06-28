const db = require('../server/mariadb').conn

//가게 정보 전부수정
exports.storeAll = function(id,name,code) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE store_info set name = ?, code = ? WHERE id = ?',[name,code,id],function(err,result) {
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

//가게 정보 이름 수정
exports.storeName = function(id,name) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE store_info set name = ? WHERE id = ?',[name,id],function(err,result) {
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

//가게 정보 지역 수정
exports.storeCode = function(id,code) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE store_info set code = ? WHERE id = ?',[code,id],function(err,result) {
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