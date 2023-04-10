// ovo treba biti pokrenuto kako bi Axios radio
// pokreće se sa: node index.js

const con = require('./connection');
const express = require('express');
const app = express();

// Ovo riješava problem: 
// Origin <origin> is not allowed by Access-Control-Allow-Origin
// from origin 'http://localhost:4200' has been blocked by CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// kraj fix-a

app.get('/atrakcije', (req,res)=>{
    con.query("select * from atrakcije", (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });
});

app.listen(4200, () => {
    console.log("Listen on the port 4200...");
});





