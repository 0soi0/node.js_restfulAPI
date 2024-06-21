const db = require('./mariadb').conn;

module.exports = {
    select_sido_code: function() {
        db.query('select code,sido from sido_code;', function(err, rows, fields) {
            if(!err){
              console.log("===========================");
              for (i = 0, len = rows.length; i < len; i++) {
                console.log(`${rows[i].code} ${rows[i].sido}`);
              }
              console.log("===========================")
              //return(rows);
            }
            else {
              console.log("err : ", err);
            }
        });
    },
    select_sales_code: function() {
        db.query('select id,date,sale from sales;', function(err, rows, fields) {
            if(!err){
              console.log("===========================");
              for (i = 0, len = rows.length; i < len; i++) {
                console.log(`${rows[i].id} ${rows[i].date} ${rows[i].sale}`);
              }
              console.log("===========================")
              return(rows);
            }
            else {
              console.log("err : ", err);
            }
        });
    }
}