var dbConnection = require('../../config/dbConnection')
// const { Client } = require('pg')
// const client = new Client({
//     host : 'tuffi.db.elephantsql.com',
//     user : 'vxgqyvin',
//     password : 'ZvurQU6qHZbsqWbAW4II01Qk0sTWSmoc',
//     database : 'vxgqyvin'
// })

// client.connect()

module.exports = function(app){    
    app.get('/noticias', async(req, res) => {
        
        var connection = dbConnection()
        connection.connect()
        var teste = await connection.query('select * from noticias')
        // res.send(teste.rows)
        res.render('noticias/noticias', {noticias : teste.rows})

        // client.query('select * from noticias',function(error, result){
        //     // res.send(result)
        //     // passa o resultado da consulta ao banco de dados como uma variavel no arquivo ejs
        //     // essa variavel vai ser um array com todos os conteúdos
        //     // passa como argumento um JSON {}
        //     res.render('noticias/noticias', {noticias : result})
        // })
    })
}