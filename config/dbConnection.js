var mysql = require('mysql');

var connMySQl = function(){
    console.log('Conexao com bd foi estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'db_noticias'
    });

}


module.exports = function (){
    console.log('o autoload carregou o módulo de conexão com bd')
    return connMySQl;
}