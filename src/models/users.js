'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    // tambahkan attribut sesuai dengan yang ditambahkan pada file migration
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gendre: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};