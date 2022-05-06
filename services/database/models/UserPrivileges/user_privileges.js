const Sequelize = require('sequelize');
const database = require('../../db');

const UserPrivileges = database.define("user_privileges", {
    id_privileges:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_user:{
        type: Sequelize.INTEGER,
    },
    privilege_category:{
        type: Sequelize.ENUM("root", "admin", "geral"),
    },
}, { tableName: 'user_privileges'});

module.exports = UserPrivileges;