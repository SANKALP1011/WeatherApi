/*
This is the route that inserts the cities and their weather to the
database which could be used for keeping record of the weather of 
the cities.
 */
const express = require("express");
const DbConnection = require("../Database/DatabaseConn");
const https = require("https");
const routertwo = express.Router();

/** 
// *swagger
* /getWeather/{city}:
*    post:
      summary: Add the searched city and its temprature to the database
      summary: Add the searched city and its temprature to the database
      consumes:
        - application/json
      parameters:
        - in: path
          name: City
          description: City Name
          schema:
            type: object
          required: true
           properties:
             city:
               type: string
     responses:
      200:
       description: Success
      500:
       description: error
*/
routertwo.post("/getWeather/:city",(req,res)=>{
    City = req.params.city;
    const url =
     "https://api.openweathermap.org/data/2.5/weather?q=" +
     City +
     "&units=metric&appid=8045b99916c2e151cb2114bdf1d26663";
     https.get(url,(response)=>{
            response.on("data",(data)=>{
                const WeatherInfo = JSON.parse(data);
                Temp = WeatherInfo.main.temp;
                console.log(City);
                console.log(Temp);
                const query = "Insert into WeatherData(City,Temp) VALUES ('"+City+"','"+Temp+"')";
                DbConnection.query(query,(err,result)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.json(result)
                    }
                })
            })
         })
 })

 module.exports = routertwo;