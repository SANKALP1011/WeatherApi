const express = require("express");
const mysql = require("mysql");
const https = require("https");
const cors = require("cors");
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const DbConnection = require("../api/Database/DatabaseConn");
//Using getWeather route that fetches the information of the single city weather 
const getWeather = require("../api/Routes/getWeather");
//Using post weather route that add the cities and their temprature to the mysql database
const postWeatherData = require("../api/Routes/postGetWeather");
//Using fetchWeather route that fetches the cities searched and their temprature from the database.
const fetchWeather = require("../api/Routes/fetchWeather");
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
        url: "https://my-weather-apiii.herokuapp.com",
        description: 'Production Server',
      }
      ],
  };

  const swaggerDocs = {
    swaggerDefinition,
    apis: [`${__dirname}/Routes/*.js`]
  };
  var options = {
    customCss: '.swagger-ui .topbar { display: none }'
  };

  const swaggerConfig = swaggerJsDocs(swaggerDocs)

app.use(getWeather);
app.use(postWeatherData)
app.use(fetchWeather);
app.use('/v1', swaggerUi.serve, swaggerUi.setup(swaggerConfig , options));
app.get("/",(req,res)=>{
  res.send("Version one weather api docs")
})
//Add headers
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3008');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// })



app.listen(port,(err,res)=>{
    console.log("server is up and running")
})



