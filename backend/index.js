
const mysql = require('mysql');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
const dbConfig = require("./dbConfig");


var dbConn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB

});

// Spajanje na bp
dbConn.connect();
/**
 * INSERT INTO
 * Tablica atrakcije:
 */

app.post('/unosAtrakcija', function (request, response) {
    const data = request.body;
    contact = [[data.naziv, data.opis, data.slika, data.prosjecna_ocjena, data.geografska_duzina, data.geografska_sirina, data.adresa]]
    
    dbConn.query('INSERT INTO atrakcije (naziv, opis, slika, prosjecna_ocjena, geografska_duzina, geografska_sirina, adresa ) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Atrakcija unesena.' });
    });
 });


 /* Tablica Komentari:*/
 app.post('/unosKomentara', function (request, response) {
    const data = request.body;
    contact = [[data.komentar, data.VK_ID_atrakcije, data.vk_id_korisnika]]
    
    dbConn.query('INSERT INTO Komentari (komentar, VK_ID_atrakcije, vk_id_korisnika) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Komentar unesen .' });
    });
 });

/* Tablica korisnici:*/
app.post('/unosKorisnika', function (request, response) {
    const data = request.body;
    contact = [[data.korisnicko_ime, data.lozinka, data.uloga]]
    
    dbConn.query('INSERT INTO korisnici (korisnicko_ime, lozinka, uloga) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Registracija uspješna .' });
    });
 });

 /* Tablica korisnici:*/
app.post('/unosKorisnika', function (request, response) {
    const data = request.body;
    contact = [[data.ocjena, data.VK_ID_atrakcije]]
    
    dbConn.query('INSERT INTO korisnici (ocjena, VK_ID_atrakcije) VALUES ? ',
    [contact], function (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'Ocjena unesena' });
    });
 });




app.listen(3000, function () {
console.log('Node app is running on port 3000');
});
module.exports = app;
   