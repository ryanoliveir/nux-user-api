const Sequelize = require('sequelize');
const database = require('../../db');

const User = database.define("users",{
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nick_name: {
        type: Sequelize.STRING(50),
    },
    email: {
        type: Sequelize.STRING(50),
    },
    user_password: {
        type: Sequelize.STRING(255),
    },
    privilege: {
        type: Sequelize.ENUM("1","2","3"),
    },
    user_status: {
        type: Sequelize.ENUM("on", "off")
    },
}, { tableName: 'users'});

module.exports = User;