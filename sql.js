//implement an ssh to the MySQL server that Seth has created
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: '165.227.20.253',
  user: 'cy',
  password: 'bunayog',
  database: 'Cy'
});

connection.connect(function(err) {
  if(err) {
    console.err('Error connecting: ' + err.stack);
    process.exit(1);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query('SHOW DATABASES', function(error, results, fields) {
  if (error) {
    throw error;
  } else {
    console.log(results);
  }
});

connection.end();
