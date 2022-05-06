const Sequelize = require('sequelize');
const database = require('../../db');

const User = database.define("users",{
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(50),
    },
    user_password: {
        type: Sequelize.STRING(255),
    },
    privilege: {
        type: Sequelize.INTEGER,
    },
    user_status: {
        type: Sequelize.ENUM("on", "off")
    },
}, { tableName: 'users'});

module.exports = User;