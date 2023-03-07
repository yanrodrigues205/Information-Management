const express = require('express'); //IMPORTANDO EXPRESS, FUNDAMENTAL PARA CRIAR UM SERVIDOR
const app = express();


app.get('/', (req, res)=>{
    res.send("heloooword!");
});


app.listen(3001, () =>{
    console.log("rodando!");
}) //SENTADO O VALOR DA PORTA DO SERVIDOR