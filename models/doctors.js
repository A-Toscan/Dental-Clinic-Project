"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.User, {
        foreignKey: "id_users", //this ForeignKey partenece a Doctor
      });
      Doctor.belongsToMany(models.Patient, {
        through: "appointments",
        foreignKey: "id_doctors",
      });
    }
  }
  Doctor.init(
    {
      id_users: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "doctors",
    }
  );
  return Doctor;
};
