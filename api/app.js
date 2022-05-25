const express = require("express");
const mysql = require("mysql");
const https = require("https");
const DbConnection = require("../api/Database/DatabaseConn");
//Using getWeather route that fetches the information of the single city weather 
const getWeather = require("../api/Routes/getWeather");
//Using post weather route that add the cities and their temprature to the mysql database
const postWeatherData = require("../api/Routes/postGetWeather");
//Using fetchWeather route that fetches the cities searched and their temprature from the database.
const fetchWeather = require("../api/Routes/fetchWeather");
//
const handleDisconnect = require("../api/Database/DatabaseConn");
const app = express();
const port = process.env.PORT || "3008";
app.use(express.urlencoded({extended:true}));

var Temp = 0.0;
var City = "";
var TempFeelsLike = 0.0;
var CloudCondition = "";

app.get("/",(req,res)=>{
    res.send(`<h1>This is the weather api which consumes open weather api to fetch the weather of that particular city</h1>`)
})
app.use(getWeather);
app.use(postWeatherData)
app.use(fetchWeather);


app.listen(port,(err,res)=>{
    console.log("server is up and running")
})



