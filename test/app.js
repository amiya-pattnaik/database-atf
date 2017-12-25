
var utl       = require('../utilities/common-utilities');
var dbc       = require('../test/config/db');
const assert  = require('assert');

// console.log(__dirname);
//
// console.log(dbc.mysql);

var sql = 'SELECT * FROM emp_info where emp_name = "Amiya"';
utl.db_execute(dbc.mysql, sql, function(results){
  //console.log(results.rows[0].emp_id);
  console.log(utl.getObjFromList(results.rows, 'emp_name', 'Amiya'));

});
