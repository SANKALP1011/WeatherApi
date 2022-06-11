/*
This is the route for fetching the data(City and its temprature) 
from the mysql database and present it to the user in the json 
format.
*/

const express = require("express");
const DbConnection = require("../Database/DatabaseConn");
const routerthree = express.Router();


/**
 * @swagger
 * /fetchWeather:
 *   get:
 *     summary: Retrieves city searched and its weather from the database.
 *     description: Retieves the data from the database.
 *     responses:
 *       200:
 *         description: success
 *       500: 
 *         description: error
*/
routerthree.get("/fetchWeather",(req,res)=>{
    const FetchDataQuery = "Select* from WeatherData";
    DbConnection.query(FetchDataQuery,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result)
       }
    })
})

module.exports = routerthree;