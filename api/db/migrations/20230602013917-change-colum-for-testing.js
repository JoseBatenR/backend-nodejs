'use strict';

//To create file npm run migrations:generate change-colum-for-testing ----//config in pakcage.json
//To run migration npm run migrations:run ----//config in pakcage.json
const { Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE,'user_id',{
      field: 'user_id',
    allowNull: false,
    type: Sequelize.UUID,
    unique: true
    });
  },

  async down(queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
