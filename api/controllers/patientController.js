var mysql = require('mysql');

// connection settings
const dbHostName = 'samson-chin-mysql-instance.cvvvgjkf3mzt.us-east-2.rds.amazonaws.com';
const dbPort = 3306;
const dbUsername = 'samsonchin';
const dbPassword = 'samsonchin';
const dbName = 'health_insurance_database';
const dbDatabase = 'health_insurance_database';

var pool  = mysql.createPool({
  host     	: dbHostName,
  port 		  : dbPort,
  user     	: dbUsername,
  password 	: dbPassword,
  database 	: dbDatabase
});

exports.list_all_patients = function(req, res) {
	pool.getConnection(function(err, connection) {
    if(err) { 
      console.log(err);  
      return; 
    }
    var sql = "select * from patient";
    connection.query(sql, [], function(err, result) {
      connection.release();
      if(err) { 
        console.log(err);  
        return; 
      }
      res.json({patients: result});
    });
  });
}

exports.read_patient_by_name = function(req, res) {
	pool.getConnection(function(err, connection) {
    if(err) { 
      console.log(err);  
      return; 
    }
    firstNameSQL = req.query.firstname ? ' and first_name = \'' + req.query.firstname + '\'': '';
    lastNameSQL = req.query.lastname ? ' and last_name = \'' + req.query.lastname + '\'' : '';
    let sql = 'select * from patient WHERE TRUE' + firstNameSQL + lastNameSQL;
    console.log("sql: ", sql);
    connection.query(sql, [], function(err, result) {
      connection.release(); // always put connection back in pool after last query
      if(err) { 
        console.log(err);  
        return; 
      }
      res.send({patients: result});
    });
  });
}