
const config = require('../config');

const { Sequelize, DataTypes } = require('sequelize');
const sequelizeInstance = require('../sequelize');

const User = sequelizeInstance.define('User', {
  universityId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['student', 'dean']],
    },
  },
});

sequelizeInstance.sync();

module.exports = User;
