'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patientes.init({
    id_users: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patientes',
  });
  return Patientes;
};