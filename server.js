var express = require('express');
var port = 6969;
var path = require('path');
var routes = require("./routes");
var app = express();

app.set("port", process.env.PORT || 6969);

app.use('/html', express.static('./public/html')); //find a way to add the database here
app.use('/css', express.static('./public/css'));
app.use('/js', express.static('./public/js'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
})
