const Users     = require('../models/users');
const Sequelize = require('sequelize');
const Joi       = require('joi');

module.exports = { 
    
    index: async (req, res) => {
        const users = await Users.findAll();
        res.send(users);
    },
    show: async (req, res) => {

        const { params } = req;

        if(!params.id) 
            return res.send({ message: "Id is required" });

        const users = await Users.findAll({ where: { id: params.id } });
        res.send(users);
    },

    add: async (req, res) => {
        
        const schema = Joi.object().keys({ 
            name:     Joi.string().min(3).required(),
            email:    Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }); 
        
        const { error } = schema.validate(req.body);
        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const { name, email, password } = req.body;
        const newUsers = await Users.create({ name, email, password });
        res.status(201).json({ message: "successfully created", id: newUsers.dataValues.id });
    },
    edit: async (req, res) => {
        
        const schema    = Joi.object().keys({ id: Joi.string().required() }); 
        const { error } = schema.validate(req.params);

        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const { id } = req.params;
        const user = await Users.findByPk(id);
        if(!!user) {
            Object.keys(user.dataValues).map(key => {
                user[key] = req.body[key] || user[key];
            });

            user.changed('updatedAt', true);            
            await user.save();
            res.send({ message: "Successfully updated" });
        }
        else {
            res.status().send({ message: "Register not found" });
        }
    },
    remove: async (req, res) => {
        const { params } = req;
        const schema     = Joi.object().keys({ id: Joi.string().required() }); 
        const { error }  = schema.validate(params);

        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const response = await Users.destroy({ where: { id: params.id }});
        res.send({ message: "successfully deleted" });
    }
}