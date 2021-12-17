require("dotenv").config();

const Users     = require('../models/users');
const Sequelize = require('sequelize');
const Joi       = require('joi');
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');

module.exports = { 
    
    index: async (req, res) => {

        const schema = Joi.object().keys({
            email:     Joi.string().required(),
            password:  Joi.string().required()
        }); 
        
        const { error } = schema.validate(req.body);
        if(error) {
            const { details } = error;
            const message     = details.map(i => i.message).join(',');
            return res.status(422).send({ error: message });
        }

        const { email, password } = req.body;
        const user     = await Users.findOne({ where: { email }});
        const response = bcrypt.compareSync(password, user.password);
        
        if(response) {
            console.log(process.env.JWT_SECRET_TOKEN);
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_TOKEN);
            return res.send({ 
                message: "Authorized", 
                userName: user.name,
                token 
            });
        }
        else {
            return res.status(401).send({ message: "Not authorized" });
        }
    }
}