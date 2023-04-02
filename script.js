const { Axios, default: axios } = require("axios");

//CREATE
axios.post('http://student.veleri.hr/phpmyadmin/sql.php?server=1&db=iooa-turisticke&table=atrakcije&pos=0git',{
    
        "Naziv atrakcije": "",
        "Opis/komentar": ""
        "Ocjena": ""
        "Slika": ""
})
.then((res) => console.log (res))
.catch((err) => console.log(err))
 

//UPDATE
axios.put('http://student.veleri.hr/phpmyadmin/sql.php?server=1&db=iooa-turisticke&table=atrakcije&pos=0git',{

    "Naziv atrakcije": "",
    "Opis/komentar": ""
    "Ocjena": ""
    "Slika": ""
})
.then((res) => console.log (res))
.catch((err) => console.log(err))