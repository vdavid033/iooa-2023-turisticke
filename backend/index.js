const con = require('./connection');
const express = require('express');
const app = express();


app.get('/atrakcije', (req,res)=>{

    con.query("select * from atrakcije", (err,result)=>{

        if(err){
            res.send('error');
        }else{
            res.send(result);
        }

    });


});


app.listen(4200);


