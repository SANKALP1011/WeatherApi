/*
Database connection with the mysql server.
*/

const express = require("express");
const mysql = require("mysql");

const DbConnection = mysql.createPool({
    "host": "us-cdbr-east-05.cleardb.net",
    "user": "b0ecc1fcab4985",
    "password": "cf3df366",
    "port": "3306",
    "database": "heroku_84419dded2a454a",
    
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


