
/**
 * INSERT INTO
 */
const mysql = require('mysql');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
const dbConfig = require("./dbConfig");


var dbConn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB

});

// connect to database
dbConn.connect();

app.post('/unosAtrakcija', function (request, response) {
    const data = request.body;
    contact = [[data.naziv, data.opis, data.slika, data.prosjecna_ocjena, data.geografska_duzina, data.geografska_sirina, data.adresa]]
    
    dbConn.query('INSERT INTO atrakcije (naziv) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Dodana atrakcija.' });
    });
 });

app.listen(3000, function () {
console.log('Node app is running on port 3000');
});
module.exports = app;
   