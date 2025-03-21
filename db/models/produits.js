'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const sequelize = require('../../config/database');

module.exports = sequelize.define('produits', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nom: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  prix: {
    type: DataTypes.DECIMAL
  },
  quantite_en_stock: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  freezeTableName: true,
  modelName: 'produits'
})