/************************************************************************************/
    	/*  Contains  Oracle SQL queries for data validation */
/************************************************************************************/

exports.queries = {
  allRows:  { query: 'SELECT * FROM emp_info'},
  oneRow: { query: 'SELECT * FROM emp_info where emp_name = "Amiya"' },
};
