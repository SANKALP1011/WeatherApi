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
 *     summary: Retrieve the weather information for the particular city
 *     description: Retieves cloud condition , temprature and one more variable from the weather api.
 *     responses:
 *       200:
 *         description: Fetches the city searched and its weather from the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 weather:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: City Name.
 *                       example: Toronto
*/

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