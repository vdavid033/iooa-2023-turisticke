const mysql = require('mysql');
 /**
  * Podatci za spajanje na bazu podataka
  */
const con =mysql.createConnection({
    host: '193.198.97.21',
    user:'iooa-turisticke',
    password:'11', 
    database:'iooa-turisticke'
})

/**
 * Obavijest ako je spajanje bilo uspješno ili ne
 */
con.connect((err)=>{
    if(err){
        console.log("Greška u spajanju s bazom podataka.")
    }else{
        console.log("Spajanje uspješno.")
    }

})