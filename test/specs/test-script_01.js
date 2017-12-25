
const assert = require('assert');
var dbc      = require('../config/db');
var utl      = require('../../utilities/common-utilities');
var empDBq   = require('../sql/empDB');



describe('Sample ETL Testing Demo Script_01 --- ', function () {

  it("executes a SQL select query on mysql database, testcase - 1", function (done){
    //var sql = 'SELECT * FROM emp_info';
    //console.log(empDBq.queries.allRows);
    utl.db_execute(dbc.mysql, empDBq.queries.allRows.query, function(results){
      //console.log(results);
      assert.equal(results.rows[0].emp_id, 1001)      //mocha style assertions
      done();
    });

  });

  it("executes a SQL select query on mysql database, testcase - 2", function (done){
    //var sql = 'SELECT * FROM emp_info';
    //console.log(empDBq.oneRow);
    utl.db_execute(dbc.mysql, empDBq.queries.oneRow.query, function(results){
      assert.equal(results.rows[0].emp_id, 1002)      //mocha style assertions
      done();
    });
  });

});
