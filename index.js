const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Raphael Moura de Almeida",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;

app.get("/alunos", (req, res )=> {
    let colegas = [ {
               nome : "Fernando",
               sobrenome : "Vinicius"
    },
    {
        nome : "Lucas",
        sobrenome : "Cravo"
    },
        res.send(colegas);
}) ;


app.listen(3000, () => {
    console.log("OK...");
})
