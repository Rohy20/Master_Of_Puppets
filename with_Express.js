//importando bibliotecas utilizadas
const express = require('express');
const fs = require('fs');
const app = express();

//criando rota
app.get('/', (req, res) => {
  //criando promessa para ler o arquivo html
  new Promise((resolve, reject) => {
    fs.readFile('page.html', (err, data) =>{
      //lidando com sucesso ou erro ao ler o arquivo
      if(err){
        console.log('Erro ao ler o arquivo', err);
        reject(err);
      } else{
        resolve(data.toString());
      }
    })
  })
  //lidando com resolução e erro do código
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err =>{
      console.log('Erro ao ler o arquivo', err);
      res.status(500).send('Erro interno');
    });
});

//porta na qual será hospedado o serviço
app.listen(8080, () =>{
  console.log('Server on');
})