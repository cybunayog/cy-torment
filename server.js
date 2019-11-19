var express = require('express');
var port = 6969;
var path = require('path');
var routes = require("./routes");
var app = express();

app.set("port", process.env.PORT || 6969);

app.use('/schools', express.static()); //find a way to add the database here
app.use('/students', express.static());
