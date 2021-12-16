'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_doctors', { 
      id: { 
        type: Sequelize.UUID,
        allowNull:     false,
        primaryKey:     true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specialization: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_doctors');
  }
};
