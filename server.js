/*
Test-1
Name: Raskirat Singh Kohli
Student ID: 149660219
Email: rkohli21@myseneca.ca
URL: https://tame-pear-beetle-vest.cyclic.app/
*/var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", function(req,res){
  res.send("<h2>Declaration:</h2><p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.<br><br>Name: <mark>Raskirat Singh Kohli</mark><br><br>Student Number: <mark>149660219</mark><br><br><a href='/test1'>Go to Test-1</a></p>");
});
app.get("/test1", function(req,res){
  res.sendFile(path.join(__dirname, "/views/test1.html"));
});
app.listen(HTTP_PORT, onHttpStart);