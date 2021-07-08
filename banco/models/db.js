const Sequelize = require('sequelize');

// Conexão com Mysql
const sequelize = new Sequelize('dbTimeFutebol', 'root', 'bcd127', {
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha na conexão." + erro)
// })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}