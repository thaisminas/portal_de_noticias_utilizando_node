module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModels(connection);

    noticiasModel.getNoticia(function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });

}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModels(connection);

    noticiasModel.getNoticia(function(error, result){
        res.render('noticias/noticia', { noticia : result });
    });
}