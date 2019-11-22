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

router.get('/schools/data', async function(req, res) {
  await connection.promise().query("SELECT * FROM schools").then(function (data) {
    res.send(data);
  }).catch(function (err) {
  console.log(err);
    res.sendStatus(404);
});
})

// router.get('/students', function(req, res) {
//   res.sendFile(__dirname + "/public/html/students.html");
// });
//
// router.get('/terms', function(req, res) {
//   res.sendFile(__dirname + "/public/html/terms.html");
// });

router.get('/staff', function(req, res) {
  res.sendFile(__dirname + "/public/html/students.html");
});

// router.get('/faculty', function(req, res) {
//   res.sendFile(__dirname + "/public/html/faculty.html");
// });

router.get('*', function(req, res) {
  res.status(404);
  //create an error page if you feel like it
});
