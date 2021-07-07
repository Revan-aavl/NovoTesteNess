const express = require("express");
const app = express();
const jogadores = require("./models/Jogadores")


// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/imagens', express.static(__dirname + 'public/imagens'))

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
        res.send("Registro apagado com sucesso!")
    }).catch(function(erro){
        res.send("Este registro não existe!")
    })
})

app.get('/cad', function(req, res){
    res.render('index')
})

app.post('/add', function(req, res){
    jogadores.create({
        nome: req.body.nome,
        times: req.body.times,
        posicao: req.body.posicao
    }).then(function(){
        res.send("<script> alert('Registro inserido com sucesso!'); </script>")
    }).catch(function(erro){
        res.send("Erro ao inserir registro!" + erro)
    })
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000.");
});
