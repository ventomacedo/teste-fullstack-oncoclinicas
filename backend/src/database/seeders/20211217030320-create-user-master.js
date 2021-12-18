'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('19Oncoclinicas@19', bcrypt.genSaltSync(10));
    await queryInterface.bulkInsert('tb_users', [{
      id:       uuidv4(),
      name:     'Master User',
      email:    'vento@oncoclinicas.com.br',
      password,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tb_users', null, {});
  }
};
