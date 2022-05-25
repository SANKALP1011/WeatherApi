/*
This is the route for fetching the data(City and its temprature) 
from the mysql database and present it to the user in the json 
format.
*/

const express = require("express");
const DbConnection = require("../Database/DatabaseConn");
const routerthree = express.Router();

routerthree.get("/fetchWeather",(req,res)=>{
    const FetchDataQuery = "Select* from WeatherData";
    DbConnection.query(FetchDataQuery,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
       }
    })
})

module.exports = routerthree;