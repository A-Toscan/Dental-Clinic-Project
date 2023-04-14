'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctors.belongsTo(models.Users, {
        foreignKey: "id_roles",
      });
      Doctors.hasMany(models.Appointments, {
        foreignKey: "id_users",
      });
      
    }
  }
    
  Doctors.init({
    id_users: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};