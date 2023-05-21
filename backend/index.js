// ovo treba biti pokrenuto kako bi Axios radio
// pokreće se sa: node index.js

const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
//const conn=require('./connection')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
const dbConfig = require("./dbConfig");


app.use(cors());



var dbConn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//spajanje s bazom
dbConn.connect()




/*
// Ovo riješava problem: 
// Origin <origin> is not allowed by Access-Control-Allow-Origin
// from origin 'http://localhost:4200' has been blocked by CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// kraj fix-a
*/



//uzimanje podataka o atrakcijama
app.get('/atrakcije', (req,res)=>{
    dbConn.query("select * from atrakcije", (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });
});

// uzimanje podataka o komentarima
app.get("/komentari", function (request, response) {
    dbConn.query("SELECT * FROM Komentari", function (error, results, fields) {
        if (error) throw error;
        return response.send({
            error: false,
            data: results,
            message: "lista komentara.",
        });
    });
});


app.get('/komentari/:id', function (request, response) {
  let id_atrakcije = request.params.id;
  dbConn.query("SELECT * FROM Komentari WHERE VK_ID_atrakcije=?", id_atrakcije, function (error, results, fields) {
      if (error) throw error;
      return response.send({
          error: false,
          data: results,
          message: "lista komentara.",
      });
  });
});

// Dodavanje komentara za atrakciju po ID-u
 
app.post('/dodajKomentar/:id', (req, res) => {
  const data = [req.body.Komentar, req.params.id]
  dbConn.query("INSERT INTO Komentari( Komentar, VK_ID_atrakcije) VALUES (?,?)", data,(err,result)=>{
    if(err){
      res.send('Error')
    }else{
      res.send(result)
    }
  })
});




//uzimanje podataka o korisnicima
app.get("/korisnici", function (request, response) {
    dbConn.query("SELECT * FROM korisnici", function (error, results, fields) {
        if (error) throw error;
        return response.send({
            error: false,
            data: results,
            message: "lista korisnika.",
        });
    });
});



app.get('/atrakcije/:id', function (request, response) {
    let id_atrakcije = request.params.id;
    if (!id_atrakcije) {
        return response.status(400).send({
            error: true, 
            
            message: 'Unesite id_atrakcije'
        });
    }
    dbConn.query('SELECT * FROM atrakcije where id_atrakcije=?', id_atrakcije, function
        (error, results, fields) {
        if (error) throw error;
        return response.send({
           data: results[0]
                
        });
    });
});


/*
app.delete('/atrakcije/id', function (request, response) {
    let id_atrakcije = request.params.id;
    if (!id_atrakcije) {
    return response.status(400).send({ error: true, message:
    'nedostaje id atrakcije' });
    }
    dbConn.query("DELETE * FROM atrakcije WHERE id_atrakcije = ?",[id_atrakcije],
    function (error, results) {
    if (error) throw error;
    return response.send({ error: false, data: results, message:
    'atrakcija je obrisana.' });
    });
});*/


app.delete('/obrisi_atrakcije/:id', function (request, response){

    
    let id_atrakcije = request.params.id;
  
    console.log(`Received request to delete atrakcija with id: ${id_atrakcije}`); // Log the received id
  
    if (!id_atrakcije) {
      return response.status(400).send({ error: true, message: 'nedostaje id atrakcije' });
    }
  
   const deleteQuery = "DELETE  FROM atrakcije WHERE id_atrakcije = ?";
     //const deleteQuery = "DELETE  FROM atrakcije WHERE id_atrakcije = '${id}'";
    dbConn.query(deleteQuery, [id_atrakcije], function (error, results) {
      if (error) {
        console.log(`Error when executing the delete query: ${error}`); // Log any error from the query
        throw error;
      }
  
      console.log('Deletion result: ${JSON.stringify(results)}'); // Log the result of the deletion
  
      return response.send({ error: false, data: results, message: 'atrakcija je obrisana obrisi_atrakcije.' });
    });
  });

  app.delete('/obrisi_sliku_atrakcije/:id', function (request, response){
    let id_atrakcije = request.params.id;
    console.log(`Received request to delete atrakcija with id: ${id_atrakcije}`); // Log the received id
    if (!id_atrakcije) {
      return response.status(400).send({ error: true, message: 'nedostaje id atrakcije' });
    }
   const deleteQuery = "UPDATE atrakcije SET slika = NULL WHERE id_atrakcije = ?";
     //const deleteQuery = "DELETE  FROM atrakcije WHERE id_atrakcije = '${id}'";
    dbConn.query(deleteQuery, [id_atrakcije], function (error, results) {
      if (error) {
        console.log(`Error when executing the delete query: ${error}`); // Log any error from the query
        throw error;
      }
      console.log('Deletion result: ${JSON.stringify(results)}'); // Log the result of the deletion
  
      return response.send({ error: false, data: results, message: 'slika atrakcija je obrisana ' });
    });
  });

  // Dodavanje ocjene za atrakciju
 
  app.put('/dodajOcjenu/:id', (req, res) => {
    const data = [req.body.prosjecna_ocjena, req.params.id]
    dbConn.query("UPDATE atrakcije SET prosjecna_ocjena = ? WHERE id_atrakcije = ?", data,(err,result)=>{
      if(err){
        res.send('Error')
      }else{
        res.send(result)
      }
    })
  });


   // Dodavanje slike za atrakciju
 
   app.put('/dodajSliku/:id', (req, res) => {
    const data = [req.body.slika, req.params.id]
    dbConn.query("UPDATE atrakcije SET slika = ? WHERE id_atrakcije = ?", data,(err,result)=>{
      if(err){
        res.send('Error')
      }else{
        res.send(result)
      }
    })
  });

  





  app.delete('/obrisi_ocjenu_atrakcije/:id', function (request, response){

    
    let id_atrakcije = request.params.id;
  
    console.log(`Received request to delete atrakcija with id: ${id_atrakcije}`); // Log the received id
  
    if (!id_atrakcije) {
      return response.status(400).send({ error: true, message: 'nedostaje id atrakcije' });
    }
  
   const deleteQuery = "UPDATE atrakcije SET prosjecna_ocjena = NULL WHERE id_atrakcije = ?";
     //const deleteQuery = "DELETE  FROM atrakcije WHERE id_atrakcije = '${id}'";
    dbConn.query(deleteQuery, [id_atrakcije], function (error, results) {
      if (error) {
        console.log(`Error when executing the delete query: ${error}`); // Log any error from the query
        throw error;
      }
  
      console.log('Deletion result: ${JSON.stringify(results)}'); // Log the result of the deletion
  
      return response.send({ error: false, data: results, message: 'ocjena atrakcija je obrisana ' });
    });
  });



//brisanje komentara

app.delete('/obrisi_komentar/:id', function (request, response){

    
    let id_komentara = request.params.id;
  
    console.log(`Received request to delete komentar with id: ${id_komentara}`); // Log the received id
  
    if (!id_komentara) {
      return response.status(400).send({ error: true, message: 'nedostaje id komentara' });
    }
  
   const deleteQuery = "DELETE  FROM Komentari WHERE ID_komentara = ?";
    dbConn.query(deleteQuery, [id_komentara], function (error, results) {
      if (error) {
        console.log(`Error when executing the delete query: ${error}`); // Log any error from the query
        throw error;
      }
  
      console.log('Deletion result: ${JSON.stringify(results)}'); // Log the result of the deletion
  
      return response.send({ error: false, data: results, message: 'komentar je obrisan obrisi komentar.' });
    });
  });






//azuriranje atrakcije

app.put('/atrakcije/azuriraj/:id', (req, res) => {
  console.log(req.body)
  const data = [req.body.naziv, req.body.opis, req.body.slika, req.body.prosjecna_ocjena, req.body.geografska_sirina, req.body.geografska_duzina, req.body.adresa, req.params.id]
  dbConn.query("UPDATE atrakcije SET naziv = ?, opis = ?,  slika = ?,  prosjecna_ocjena = ?,  geografska_sirina = ?,  geografska_duzina = ?,  adresa = ? WHERE id_atrakcije = ?", data,(err,result)=>{
    if(err){
      res.send('Error' + err)
    }else{
      res.send(result)
    }
  })
});





//Dohvacanje komentara za specificnu atrakciju

app.get('/atrakcije/:id/komentari/', function (request, response) {
  let id_atrakcije = request.params.id;
  if (!id_atrakcije) {
      return response.status(400).send({
          error: true, 
          
          message: 'Unesite id_atrakcije'
      });
  }
  dbConn.query('SELECT * FROM Komentari where VK_ID_atrakcije=?', id_atrakcije, function
      (error, results, fields) {
      if (error) throw error;
      return response.send({
         data: results
              
      });
  });
});






//port na kojem je app
app.listen(4200, function () {
console.log('Node app is running on port 4200');
});
//module.exports = app;




