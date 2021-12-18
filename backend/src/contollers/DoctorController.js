const Doctor    = require('../models/doctors');
const Sequelize = require('sequelize');
const Joi       = require('joi');

module.exports = { 
    
    index: async (req, res) => {
        const doctors = await Doctor.findAll();
        res.send(doctors);
    },
    show: async (req, res) => {

        const { params } = req;

        if(!params.id) 
            return res.send({ message: "Id is required" });

        const doctors = await Doctor.findAll({ where: { id: params.id } });
        res.send(doctors);
    },
    search: async (req, res) => {

        const { like, or } = Sequelize.Op;
        const { params }   = req;

        const schema    = Joi.object().keys({ term: Joi.required() }); 
        const { error } = schema.validate(params);

        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const doctors = await Doctor.findAll({
            where: {
                [or]: [
                    { name:           { [like]: `%${params.term}%` }},
                    { crm:            { [like]: `%${params.term}%` }},
                    { specialization: { [like]: `%${params.term}%` }}
                ]
            }
        });
        res.send(doctors);
    },

    add: async (req, res) => {
        
        const schema = Joi.object().keys({ 
            name:           Joi.string().required(),
            crm:            Joi.string().required(),
            specialization: Joi.string().required(),
        }); 
        
        const { error } = schema.validate(req.body);
        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const { name, crm, specialization } = req.body;
        const newDoctor = await Doctor.create({ name, crm, specialization });
        res.status(201).json({ message: "successfully created", id: newDoctor.dataValues.id });
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
        const doctor = await Doctor.findByPk(id);
        if(!!doctor) {
            Object.keys(doctor.dataValues).map(key => {
                doctor[key] = req.body[key] || doctor[key];
            });

            doctor.changed('updatedAt', true);            
            await doctor.save();
            res.send({ message: "Successfully updated" });
        }
        else {
            res.status(400).send({ message: "Register not found" });
        }
    },
    editComplete: (req, res) => {
        try {

            const { id } = req.params;
            const { name, crm, specialization } = req.body;
            const dataValidation = { id, name, crm, specialization };

            const schema = Joi.object().keys({
                id:             Joi.string().required(),
                name:           Joi.string().required(),
                crm:            Joi.string().required(),
                specialization: Joi.string().required()
            }); 
            const { error } = schema.validate(dataValidation);

            if(error) {
                const { details } = error;
                const message     = details.map(i => i.message).join(',');
                return res.status(422).send({ error: message });
            }

            Doctor.update({ name, crm, specialization }, { where: { id }});
            res.send({ message: "Successfully updated" });
        }
        catch(error) {
            res.send({ message: "Update failed" });
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

        const response = await Doctor.destroy({ where: { id: params.id }});
        res.send({ message: "successfully deleted" });
    }
}