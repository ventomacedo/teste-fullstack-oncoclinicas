const Sequelize = require('sequelize');
const database  = require('../database');
const bcrypt    = require('bcryptjs');

    const Users = database.define('tb_users', {
        id: { 
            type:         Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull:    false,
            primaryKey:   true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
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
    }, { 
        paranoid:        true,
        freezeTableName: true,
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt    = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt    = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
    });

module.exports = Users;