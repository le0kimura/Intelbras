'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       tipo: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       dias_permitidos: {
         type: Sequelize.INTEGER,
         allowNull: true,
       },
       usuario: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       senha: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       matricula: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }).then(function () {
      queryInterface.sequelize.query("insert into users (nome, tipo, usuario, senha, matricula) values ('admin', 'admin', 'admin', 'senha123', '51323856-8148-43fc-8631-861d05cd2f4c')");
    });

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('usuario');
     
  }
};
