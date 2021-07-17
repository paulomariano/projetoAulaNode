// iniciar npm  -> npm init
//instalar express npm install express -save
//instalar ejs     npm install ejs --save
//instalar nodemon npm install -g nodemon
// para rodar o nodemon diretamente pelo vs code é necessario dar uma permissão no windows
// é necessario entrar o windows powershell em modo administrador e executar o código Set-ExecutionPolicy RemoteSigned
// e escolher a opção Sim [S]

// instalação do MySQL npm install mysql --save

// instalação do Consign npm install consign --save

// instalação do express-validator npm install express-validator --save



// adicionar o express no projeto
// var express = require('express')

// var app = express()

// app.set('view engine', 'ejs')

//colocando as configurações do express e ejs com o modulo server usando CommonJs
const app = require('./config/server')


// Rotas por modulos
// const rotaHome = require('./app/routes/home')(app)
// const rotaNoticias = require('./app/routes/noticias')(app)
// const rotaInclusaoNoticia = require('./app/routes/admin')(app)

// as rotas agoram estão sendo carregadas pelo consign configurado no server.js

app.listen(3000, () => {
    console.log('Servidor rodando com Express')
})