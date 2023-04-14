'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.roles, {
        foreignKey: "id_roles",
      });
      Users.hasMany(models.Doctor, {
        foreignKey: "id_users",
      });
      Users.hasMany(models.Patients, {
        foreignKey: "id_users",
      });
    
  

    
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    id_roles: DataTypes.INTEGER,
    email: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};