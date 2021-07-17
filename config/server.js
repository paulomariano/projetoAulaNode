// adicionar o express no projeto
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

// configura o metodo Post da nossa aplicação
app.use(express.urlencoded({extended: true}))

consign().include('app/routes').into(app)

module.exports = app