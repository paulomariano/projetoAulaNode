
var dbConnection = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia')
    }) 
    
    app.post('/noticias/salvar', (req, res) => {
        var noticia = req.body
        var connection = dbConnection()
        connection.connect()

        var msg = 
        connection.query(`INSERT INTO noticias(titulo, noticia) VALUES('${noticia.titulo}', '${noticia.noticia}')`, function(error, result){
            res.redirect('/noticias')
        })
        // connection.query('insert into noticias set ?', noticia, function(error, result){
        //     //requisições com post deve usar o redirect para remover o POST da memoria
        //     // protejendo a aplicação contra reenvio por F5
        //     res.redirect('/noticias')
        // })
    }) 
}

