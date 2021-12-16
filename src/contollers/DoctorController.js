const Doctor       = require('../models/doctors');
const Sequelize    = require('sequelize');

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
        
        if(!params.term) 
            return res.send({ message: "Term is required" });

        const doctors = await Doctor.findAll({
            where: {
                [or]: [
                    { doctorName:     { [like]: `%${params.term}%` }},
                    { crm:            { [like]: `%${params.term}%` }},
                    { specialization: { [like]: `%${params.term}%` }}
                ]
            }
        });
        res.send(doctors);
    },

    add: async (req, res) => {
        const { name, crm, specialization } = req.body;
        
        if(!name || !crm || !specialization) 
            return res.send({ message: "Name, CRM and Specialization are required" });

        const newDoctor = await Doctor.create({ name, crm, specialization });
        res.status(201).json({ message: "successfully created", id: newDoctor.dataValues.id });
    },
    edit: async (req, res) => {
        const { id } = req.params;
        
        if(!id) 
            return res.send({ message: "Id is required" });

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
            res.send({ message: "Register not found" });
        }
    },
    editComplete: (req, res) => {
        try {
            const { id } = req.params;
            const { name, crm, specialization } = req.body;

            if(!id || !name || !crm, !specialization) 
                return res.send({ message: "All fields are required" });

            Doctor.update({ name, crm, specialization }, { where: { id }});
            res.send({ message: "Successfully updated" });
        }
        catch(error) {
            res.send({ message: "Update failed" });
        }
    },

    remove: async (req, res) => {
        const { params } = req;
        const response = await Doctor.destroy({ where: { id: params.id }});
        res.send({ message: "successfully deleted" });
    }
}