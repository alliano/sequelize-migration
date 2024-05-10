'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {*} queryInterface 
   * queryInterface adalah sebuh object yang dapat kita gunakan utuk berkomunukasi
   * dengan databe secara dialec-agnostic
   * @param {*} Sequelize 
   * @returns 
   */
  async up (queryInterface, Sequelize) {
    /**
     * disini kita bisa memanfaatkan parameter queryInterface 
     * untuk berkomunikasi dengan database, dengan menggunakan
     * queryInterface ini kita bisa melakukan altertabel dan sebagainya
     */
    return Promise.all([
      queryInterface.addColumn("Users", "password", {
        type: DataTypes.STRING,
        allwoNull: false
      }),
      queryInterface.addColumn("Users", "gendre", {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        allwoNull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    // logic untuk melakukan rollback
    return Promise.all([
      queryInterface.removeColumn("Users", "password"),
      queryInterface.removeColumn("Users", "gendre")
    ])
  }
};
