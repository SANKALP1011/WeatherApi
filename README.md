# WeatherApi
 - This is the express and node based weather api that consumes the open weather api to fetch the information for the weather.
 - This the version one of the api and is completely documeneted.

# Link for express api -:
 > https://my-weather-apiii.herokuapp.com/fetchWeather

# Link for site with web application -:
 > https://weatherspy.herokuapp.com/

# About WeatherSpy(web appliocation) -:
 > Weather spy is a web application that fetches the various imformation from open weather api and present it to the user when the user searches for the city.
 >https://github.com/SANKALP1011/WeatherApp

# Backend
> Node.js
> Express.js

# Database
> Mysql

# Deployment
> Heroku

# Routes
> There are three routes in the api which are dynamic -:
>  - getWeather/City -: (get route)
>    - In this route we need to pass the city parameter in the url like this https://my-weather-apiii.herokuapp.com/getWeather/Dubai
>  - getWeather/City -: (Post route)
>    - This is a post route where when the user searches any city , it will fetch the information of that city and then add it to the database 
>      which help in saving the information like this -:
```json
[
    {
        "City": "Lucknow",
        "Temp": 24.99
    },
    {
        "City": "Mumbai",
        "Temp": 29.99
    }
]
```
>  - fetchWeather -: (get route)
>    - This is a get route which fetches the weather details from the database which the help of query and then represent this information the              
       form of json format.
>     - Example - https://my-weather-apiii.herokuapp.com/fetchWeather
>    - Result
```json
[
    {
        "City": "Lucknow",
        "Temp": 24.99
    },
    {
        "City": "Mumbai",
        "Temp": 29.99
    }
]
```

# Testing 
 > All the routes are tested on the postman.
