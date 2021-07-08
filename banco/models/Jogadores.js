const db = require('./db');

const Jogadores = db.sequelize.define('tblJogadores', {
    
    idJogadores: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    times: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    posicao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }

    // idPosicoes: {
    //     type: db.Sequelize.INT,
    //     allowNull: false,
    //     references: {
    //         model: tblPosicoes,
    //         key: 'idPosicoes'
    //     }
    // }
})

// Jogadores.sync({force: true})
module.exports = Jogadores






















