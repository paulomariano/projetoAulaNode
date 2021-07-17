var dbConnection = require('../../config/dbConnection')
module.exports = function(app){
    app.get('/noticia', function(req, res){
        // recupera id noticia por get
        var id = req.query.id

        var connection = dbConnection()
    
        connection.query('select * from noticias where id_noticias = '+ id,function(error, result){
            // res.send(result)
            // passa o resultado da consulta ao banco de dados como uma variavel no arquivo ejs
            // essa variavel vai ser um array com todos os conteúdos
            // passa como argumento um JSON {}
            res.render('noticias/noticia', {noticia : result})
        })
    })
}