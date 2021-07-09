function Noticias(connection){
    this._connection = connection;

}

Noticias.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
};

Noticias.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticias = 2', callback);
};

Noticias.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticia set ?', noticia, callback)
};  



module.exports = function(){
    return Noticias;
}