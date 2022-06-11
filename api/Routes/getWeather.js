/*
This is the route that fetches the weather conditions of the city whose name is been searched.
*/

const express = require("express");
const routerone = express.Router();
const https = require("https");


/**
 *@swagger
 *  /getWeather/{city}:
 *    get:
 *     summary: Retrieve the weather information for the particular city
 *     description: Retieves cloud condition , temprature and one more variable from the weather api.
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *          type: string
 *         required: true
 *         description: Get the temparatutre condition of the city
 *         example: Chennai
 *     responses:
 *       200:
 *        description: success
 *       500:
 *        description: error
*/
routerone.get("/getWeather/:city",(req,res)=>{
    var City = req.params.city;
    const url =
     "https://api.openweathermap.org/data/2.5/weather?q=" +
     City +
     "&units=metric&appid=8045b99916c2e151cb2114bdf1d26663";
     https.get(url,(response)=>{
            response.on("data",(data)=>{
                const WeatherInfo = JSON.parse(data);
                Temp = WeatherInfo.main.temp;
                TempFeelsLike = WeatherInfo.main.feels_like;
                CloudCondition = WeatherInfo.weather[0].description;
                res.write("The temprature of " + City +" is " + Temp + "  ");
                res.write("The cloud condition of "+ City + " is " + CloudCondition + "  ")
                res.write("The temparatute feel of "+ City + " is " + TempFeelsLike  + "  ")
                res.end();
            })
         })
 })

module.exports = routerone;