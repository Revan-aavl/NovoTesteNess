const express = require("express");
const app = express();
const jogadores = require("./models/Jogadores")


// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')


// Rotas
app.get('', (req, res) => {
    res.render('index')
})

app.get('/listagem', (req, res) => {
    jogadores.findAll({order: [['idJogadores', 'DESC']]}).then(function(jogadores){
        res.render('listagem', {jogadores: jogadores})
    })
   
})



app.get('/deletar/:idJogadores',  function(req , res) {
    jogadores.destroy({where: {'idJogadores': req.params.idJogadores}}).then(function(){
        res.send("<script> alert('Registro apagado com sucesso!'); location.href = '../listagem'; </script>")
    }).catch(function(erro){
        res.send("<script> alert('Este registro não existe!'); location.href = '../listagem'; </script>" + erro)
    })
})

app.post('/add', function(req, res){
    jogadores.create({
        nome: req.body.nome,
        times: req.body.times,
        posicao: req.body.posicao
    }).then(function(){
        res.send("<script> alert('Registro inserido com sucesso!'); location.href = '../'; </script>")
    }).catch(function(erro){
        res.send("<script> alert('Erro ao inserir registro!'); location.href = '../'; </script>" + erro)
    })
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000.");
});
