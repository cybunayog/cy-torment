const express = require('express');
const path = require('path');
const router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/html/home.html");
});

router.get('/schools', function(req, res) {
  res.sendFile(__dirname + "/public/html/schools.html");
});

router.get('/students', function(req, res) {
  res.sendFile(__dirname + "/public/html/students.html");
});

router.get('/terms', function(req, res) {
  res.sendFile(__dirname + "/public/html/terms.html");
});

router.get('/staff', function(req, res) {
  res.sendFile(__dirname + "/public/html/students.html");
});

router.get('/faculty', function(req, res) {
  res.sendFile(__dirname + "/public/html/faculty.html");
});

router.get('*', function(req, res) {
  res.status(404);
  //create an error page if you feel like it
});

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
