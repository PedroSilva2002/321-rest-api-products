'use strict';
const {
  Model
} = require('sequelize');
const sequelize = require('../../config/database');

module.exports = sequelize.define('produits', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nom: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  prix: {
    type: Sequelize.DECIMAL
  },
  quantite_en_stock: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true,
  modelName: 'produits'
})