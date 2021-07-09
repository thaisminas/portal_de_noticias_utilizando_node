module.exports = function(application){

    application.get('/noticias', function(req,res){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModels(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render('noticias/noticias', { noticias : result });
        });

    });
}