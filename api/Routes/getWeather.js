/*
This is the route that fetches the weather conditions of the city whose name is been searched.
*/

const express = require("express");
const routerone = express.Router();
const https = require("https");

/**
 * @swagger
 * /getWeather/{city}:
 *   get:
 *     summary: Retrieve the weather information for the particular city
 *     description: Retieves cloud condition , temprature and one more variable from the weather api.
 *     responses:
 *       200:
 *         description: Pass a single city.
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
                res.write("The name of the city is " + City + "     ");
                res.write("The temprature of " + City +" is " + Temp + "    ");
                res.write("The Cloud condition of  the " + City +" is " + CloudCondition + "    ");
                res.end();
            })
         })
 })

module.exports = routerone;