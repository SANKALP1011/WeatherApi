const express = require("express");
const mysql = require("mysql");
const https = require("https");
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
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

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Dynamic Weather Api',
      version: '1.0.0',
      description: 'This is the dynamic weather api which saves the weather information in database and uses open weather api to fetch information.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Sankalp',
        url: 'https://portfolio-site-sankalp1011.vercel.app/',
      },
    },
    servers: [
        {
          url: 'http://localhost:3008',
          description: 'Development Server',
        },
        {
          url: 'http://localhost:3008',
          description: 'Production Server',
        },
      ],
  };

  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['../api/Routes/*.js'],
  };

  const swaggerConfig = swaggerJsDocs(options)

var Temp = 0.0;
var City = "";
var TempFeelsLike = 0.0;
var CloudCondition = "";

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.get("/",(req,res)=>{
  res.send("Version one weather api docs")
})

app.use(getWeather);
app.use(postWeatherData)
app.use(fetchWeather);


app.listen(port,(err,res)=>{
    console.log("server is up and running")
})



