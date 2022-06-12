/*
Database connection with the mysql server.
*/

const express = require("express");
const mysql = require("mysql");
const path = require("path");
require('dotenv').config({ 
  path: path.resolve(__dirname, '../../.env') 
})

const DbConnection = mysql.createPool({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "port": process.env.DB_PORT,
    "database": process.env.DB_DBNAME,
})

function handleDisconnect(){

        DbConnection.getConnection((err) => {
            if (err) {
                console.log(err);
                setTimeout(handleDisconnect, 2000);
            }
            else {
                console.log("Database connected");
            }
        })
        DbConnection.on("error", function (err) {
            console.log("db error", err);
            if (err.code === "PROTOCOL_CONNECTION_LOST") {
              // If it gets the following error(when coonection is lost), then
              handleDisconnect(); // We will call the function and restart the connection again.
            } else {
              // Otherwise throw the error and then again the call the function.
              throw err; // Handles error
            }
          });
}
handleDisconnect();

module.exports = DbConnection;


