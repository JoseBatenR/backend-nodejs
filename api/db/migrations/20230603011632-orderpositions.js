'use strict';

const {OrderPositionSchema, ORDER_POSITION_TABLE } = require('../models/orderposition.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_POSITION_TABLE,OrderPositionSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_POSITION_TABLE);
  }
};
