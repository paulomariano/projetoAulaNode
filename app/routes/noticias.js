var dbConnection = require('../../config/dbConnection')
module.exports = function(app){    
    app.get('/noticias', (req, res) => {
        
        var connection = dbConnection()
    
        connection.query('select * from noticias',function(error, result){
            // res.send(result)
            // passa o resultado da consulta ao banco de dados como uma variavel no arquivo ejs
            // essa variavel vai ser um array com todos os conteúdos
            // passa como argumento um JSON {}
            res.render('noticias/noticias', {noticias : result})
        })
    })
}