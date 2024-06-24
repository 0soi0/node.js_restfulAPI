const db = require('./mariadb').conn;

exports.select_sido_code = function() {
    return new Promise(function(resolve,reject) {
        db.query('select * from sido_code', function(err,rows) {
            if(!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    })
    db.end();
}

exports.sido_sales = function(req,res) {
    
}

