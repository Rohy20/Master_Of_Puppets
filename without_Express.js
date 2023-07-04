//importando modulos utilizados
const fs = require('fs');
const http = require('http');

//criando serviço 
http.createServer(function(req, res){
    //lendo arquivo
    fs.readFile('letra.html', 'utf-8', function(err, data){
    //lidando com sucesso ou erro ao ler o arquivo
        if(err){
            console.log('Erro ao ler o arquivo', err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Erro interno de servidor')
            res.end();
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });
}).listen(8080); //indicando porta que hospedará o serviço