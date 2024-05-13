// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }

import { DataTypes, Model } from "sequelize";
import { connection } from "../db/config/connection";

//   Users.init({
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: DataTypes.STRING,
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false
//     },
//     // tambahkan attribut sesuai dengan yang ditambahkan pada file migration
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     gendre: {
//       type: DataTypes.ENUM,
//       values: ["male", "female"],
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };

export default class Users extends Model {};
Users.init(
  {
    user_id: {
      type         : DataTypes.INTEGER,
      allowNull    : false,
      unique       : true,
      autoIncrement: true,
      primaryKey   : true
    },
    firstName: {
      type     : DataTypes.STRING(100),
      allowNull: false,
      unique   : false,
    },
    lastName: {
      type     : DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type     : DataTypes.STRING(50),
      allowNull: false,
      unique   : true
    },
    password: {
      type     : DataTypes.STRING(255),
      allowNull: false
    }
  },{
    tableName: "users",
    sequelize: connection,
    underscored: true
  }
);

Users.sync({ force: true });