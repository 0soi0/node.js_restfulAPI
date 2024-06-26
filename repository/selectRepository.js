const db = require('../server/mariadb').conn;

//test쿼리
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
}

//지역별 점포보기
exports.sido_store = function(requestCode) {
    return new Promise(function(resolve,reject) {
        requestCode = requestCode.split(' ');
        var sql = 'SELECT s.id,s.name,c.sido from store_info s INNER JOIN sido_code c ON(s.code=c.code) WHERE c.code= ' + db.escape(requestCode[0]);
        for(i=1; i<requestCode.length; i++) {
            sql = sql+' || c.code='+db.escape(requestCode[i]);
        };

        db.query(sql, function(err, rows) {
            if(!err) {
              resolve(rows);
            } else {
              reject(err);
            }
        });
    })
}

//지역별 매출보기(월기준)
exports.sido_sales = function(requestCode,requestMonth) {
    return new Promise(function(resolve,reject) {
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
            if(!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    })
}

//날짜별로 가게의 매출 현황보기
exports.sales_store = function(requestId,requestMonth) {
    return new Promise(function(resolve,reject) {
        requestMonth = requestMonth.split(' ');

        var sql = 'SELECT s.id,s.name,s.code,d.date,d.sale from store_info s INNER JOIN (SELECT * from sales WHERE month(date)='+db.escape(requestMonth[0]);
        for(i=1; i<requestMonth.length; i++) {
            sql = sql+' || month(date)='+db.escape(requestMonth[i]);
        };
        sql = sql+') d on(s.id=d.id) WHERE s.id = '+db.escape(requestId)+' ORDER BY d.date DESC'

        db.query(sql, function(err,rows) {
            if(!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    })
}

