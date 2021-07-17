// var mysql = require('mysql')
const { Client, Pool } = require('pg')
const client = new Pool({
    host : 'tuffi.db.elephantsql.com',
    user : 'vxgqyvin',
    password : 'ZvurQU6qHZbsqWbAW4II01Qk0sTWSmoc',
    database : 'vxgqyvin'
})



// module.exports = function(){
//     return pg.createConnection({
//         host : 'localhost',
//         user : 'root',
//         password : '1234',
//         database : 'portal_noticias'
//     })
// }

module.exports = function(){
    return client
}