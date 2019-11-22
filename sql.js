//implement an ssh to the MySQL server that Seth has created
const axios = require('axios');
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: '165.227.20.253',
  user: 'cy',
  password: 'bunayog',
  database: 'Cy'
});

//Bearer token
let config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWVVc2VyIiwiaWF0IjoxNTc0MTQ2NjAxfQ.kCwUbXSkhrefqhei0ZfyW-7Sk59XZVd2kk6TJg56P5Q'
  }
}

//faculty URL
// let URLS = [];
// for (var i = 0; i < 10; i++) {
//   URLS.push(axios.get('https://cy-torment.herokuapp.com/faculty?pageNum=' + i, config));
// }
//
// Promise.all(URLS).then(async function (values) {
//   let dataToWrite = [];
//   for (var i = 0; i < values.length; i++) {
//     dataToWrite.push(values[i].data)
//   }
//   dataToWrite = dataToWrite[0];
//   console.log(dataToWrite);
//   for (var i = 0; i < dataToWrite.length; i++) {
//     await connection.promise().query("INSERT INTO faculty VALUES ('" + dataToWrite[i].Name + "', "
//     + dataToWrite[i].FacNum + ","  + "'null')").catch(function (err) {
//       console.log(err);
//     })
//   }
// }).catch(function (err) {
//   console.error(err);
// });


//terms
// let URLS2 = [];
// for (var i = 0; i < 10; i++) {
//   URLS2.push(axios.get('https://cy-torment.herokuapp.com/terms?pageNum=' + i, config));
// }
//
// Promise.all(URLS2).then(async function (values) {
//   console.log(values.length);
//   let dataToWrite = [];
//   for (var i = 0; i < values.length; i++) {
//     if (values[i].data.length != 0) {
//     dataToWrite.push(values[i].data[0])
//     } else {
//     //nothing happens
//     }
//   }
//   console.log(dataToWrite);
//   for (var i = 0; i < dataToWrite.length; i++) {
//     await connection.promise().query("INSERT INTO terms VALUES ('" + JSON.stringify(dataToWrite[i].School) + "', "
//     + dataToWrite[i].Term + ", "+ dataToWrite[i].Enrollment + ")").catch(function (err) {
//       console.log(err);
//     })
//   }
// }).catch(function (err) {
//   console.error(err);
// });


//Schools
let URLS3 = [];
for (var i = 0; i < 10; i++) {
  URLS3.push(axios.get('https://cy-torment.herokuapp.com/schools?pageNum=' + i, config));
}

Promise.all(URLS3).then(async function (values) {
  let dataToWrite = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i].data.length != 0) {
      dataToWrite.push(values[i].data)
    } else {
      //NADA
    }
  }
  //dataToWrite = dataToWrite[0];
  console.log(dataToWrite);
  for (var i = 0; i < dataToWrite.length; i++) {
    console.log(dataToWrite[i][0].Students);
    await connection.promise().query("INSERT INTO schools VALUES ('" + JSON.stringify(dataToWrite[i][0].Students) + "', "
    + 'null' + ", "  + 'null' + ", 'null' , " + 'null' + ", '" + dataToWrite[i][0].Name +
    "', '" + dataToWrite[i][0].Address + "')").catch(function (err) {
      console.log(err);
    })
  }
}).catch(function (err) {
  console.error(err);
});

//
//Staff
//let URLS = [];
// for (var i = 0; i < 10; i++) {
//   URLS.push(axios.get('https://cy-torment.herokuapp.com/faculty?pageNum=' + i, config));
// }
//
// Promise.all(URLS).then(async function (values) {
//   let dataToWrite = [];
//   for (var i = 0; i < values.length; i++) {
//     dataToWrite.push(values[i].data)
//   }
//   dataToWrite = dataToWrite[0];
//   console.log(dataToWrite);
//   for (var i = 0; i < dataToWrite.length; i++) {
//     await connection.promise().query("INSERT INTO faculty VALUES ('" + dataToWrite[i].Name + "', "
//     + dataToWrite[i].FacNum + ","  + "'null')").catch(function (err) {
//       console.log(err);
//     })
//   }
// }).catch(function (err) {
//   console.error(err);
// });
//
//
// //students
// let URLS = [];
// for (var i = 0; i < 10; i++) {
//   URLS.push(axios.get('https://cy-torment.herokuapp.com/faculty?pageNum=' + i, config));
// }
//
// Promise.all(URLS).then(async function (values) {
//   let dataToWrite = [];
//   for (var i = 0; i < values.length; i++) {
//     dataToWrite.push(values[i].data)
//   }
//   dataToWrite = dataToWrite[0];
//   console.log(dataToWrite);
//   for (var i = 0; i < dataToWrite.length; i++) {
//     await connection.promise().query("INSERT INTO faculty VALUES ('" + dataToWrite[i].Name + "', "
//     + dataToWrite[i].FacNum + ","  + "'null')").catch(function (err) {
//       console.log(err);
//     })
//   }
// }).catch(function (err) {
//   console.error(err);
// });
//console.log(URLS);

connection.connect(function(err) {
  if(err) {
    console.err('Error connecting: ' + err.stack);
    process.exit(1);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// connection.query('INSERT Cy', function(error, results, fields) {
//   if (error) {
//     throw error;
//   } else {
//     console.log(results);
//     //console.log(fields);
//   }
// });
// var insertSQL = 'INSERT ' + values + ' INTO';
// var tableNames = ['faculty', 'terms', 'schools', 'staff', 'students'];
//
// connection.query(insertSQL + tableName[0], )



//connection.end();
