// jshint esversion6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // for accessing the local css and images files.

app.get("/", function(req, res){
  // res.send("Hello!");
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  var jsonData = JSON.stringify(data);
  var url = "https://us6.api.mailchimp.com/3.0/lists/516b8cb52d";

  var options = {
    method: "POST",
    auth: "K_akarot:b4aef1ff692217206fb7ab5f08afeece-us6"
  }

  const request = https.request(url, options, function(response){

    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    } else{
      res.sendFile(__dirname + "/faliure.html");
    }
    response.on("data", function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
  // console.log(firstName + lastName + " subscrebed");
});

app.post("/faliure", function(req, res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server Started!");
});

// process.env.PORT for heroku

// API-key :b4aef1ff692217206fb7ab5f08afeece-us6
// list-id : 516b8cb52d

// https://vast-wave-64766.herokuapp.com/
