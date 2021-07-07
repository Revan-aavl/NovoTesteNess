const db = require('./db');

const Posicoes = db.sequelize.define('tblPosicoes', {
    posicao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

Posicoes.sync({force: true})
 module.exports = Posicoes






















