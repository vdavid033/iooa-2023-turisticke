
/**
 * INSERT INTO
 */
const mysql = require('mysql');
const con = require('./connection');
const express = require('express');
const app = express();
/*app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

con.connect(function(err) {
    if (err) throw err;
    console.log("Uspješno");
    var sql = "INSERT INTO atrakcije  (naziv, opis, slika, geografska_sirina, geografska_duzina, adresa ) VALUES (' ', ' ')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 red unesen");
    });
  });
*/

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/dodajAtrakciju', function (request, response) {
    const data = request.body;
    contact = [[data.naziv, data.opis, data.slika, data.prosjecna_ocjena, data.geografska_duzina, data.geografska_sirina, data.adresa]]
    dbConn.query('INSERT INTO atrakcije (naziv) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Dodana atrakcija.' });
    });

    app.listen(4200, function () {
        console.log('Node app is running on port 4200');
       });
       module.exports = app;
   });
   