'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.User, {
        foreignKey: "id_roles",
      });
      Patient.hasMany(models.Appointment, {
        foreignKey: "id_users",
      });
    }
  }
  Patient.init({
    id_users: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
    tableName: 'patiens'
  });
  return Patient;
};