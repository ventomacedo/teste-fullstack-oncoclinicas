const Sequelize = require('sequelize');
const database  = require('../database');

    const Doctor = database.define('tb_doctors', {
        id: { 
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
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
            defaultValue: Sequelize.fn('NOW'),
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            defaultValue: Sequelize.fn('NOW'),
            field: 'updated_at',
            type: Sequelize.DATE
        },
        deletedAt: {
            field: 'deleted_at',
            type: Sequelize.DATE
        }
    }, { paranoid: true});

module.exports = Doctor