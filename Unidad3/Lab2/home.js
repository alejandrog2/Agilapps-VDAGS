var logic = require('./logic');

exports.get = function(req, res){
    res.writeHead(200, {
        'Conent-Type' : 'text/html'
    });
    res.end(
        logic.page("Operacion Matematica",
                   logic.navbar(),
        '<p>Operacion Matematica</p>')
    );
}