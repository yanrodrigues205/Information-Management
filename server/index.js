const express = require('express'); //IMPORTANDO EXPRESS, FUNDAMENTAL PARA CRIAR UM SERVIDOR
const app = express();
const cors = require('cors');
const mysql = require("mysql"); //IMPORTANDO MYSQL

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database: "banco_node",

});

app.use(cors());
app.use(express.json());

app.post('/cadastro', (req, res)=>{
const { nome } = req.body;
const { email } = req.body;
const { cpf } = req.body;
const { fone } = req.body;
const { cargo } = req.body;

let sql = "INSERT INTO `funcionarios`(`nome_fun`, `email_fun`, `fone_fun`, `cpf_fun`, `cargo_fun`, `data_insert_fun`) VALUES (?,?,?,?,?,NOW())";
    db.query(sql, [nome, email, fone, cpf, cargo], (err, res) => {
        console.log(err);
    });
});
// app.get('/', (req, res)=>{
//    
// });


app.listen(3001, () =>{
    console.log("rodando!");
}) //SENTADO O VALOR DA PORTA DO SERVIDOR