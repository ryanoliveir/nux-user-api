const Sequelize = require('sequelize');
const database = require('../../db');

const UserPrivileges = database.define("user_privileges", {
    id_privilege:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_credencial:{
        type: Sequelize.INTEGER,
    },
    privilege_category:{
        type: Sequelize.ENUM("root", "admin", "geral"),
    },
}, { tableName: 'user_privileges'});

module.exports = UserPrivileges;