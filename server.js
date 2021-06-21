
const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello world</h1>");
});

app.get("/contact", function(request, response){
  response.send("Contact me at: dhirajy108@gmail.com");
});

app.get("/about", function(request, response){
  response.send("My name is Dhiraj, welcome to my world.");
});

app.get("/hobbies", function(request, response){
  response.send("<ul><li>theoretical physics</li><li>programming</li><li>psychology</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
