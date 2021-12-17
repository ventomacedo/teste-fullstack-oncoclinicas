require('express-router-group');

const { Router } = require('express');
const routes = new Router();

// Controllers
const DoctorController = require('./contollers/DoctorController');
const LoginController  = require('./contollers/LoginController');
const UserController   = require('./contollers/UserController');

    routes.get('/',       (req, res) => res.send({ message: "Nada aqui..." }));
    routes.post('/login', LoginController.index);

    /** Rotas de médicos **/
        routes.group('/medicos', routes => { 
            routes.get('/find/:term', DoctorController.search);
            routes.get('/:id',        DoctorController.show);
            routes.get('/',           DoctorController.index);
            routes.post('/',          DoctorController.add);
            routes.put('/:id',        DoctorController.editComplete);
            routes.patch('/:id',      DoctorController.edit);
            routes.delete('/:id',     DoctorController.remove);
        });

    /** Rotas de usuário **/
        routes.group('/usuarios', routes => {
            routes.get('/:id',        UserController.show);
            routes.get('/',           UserController.index);
            routes.post('/',          UserController.add);
            routes.patch('/:id',      UserController.edit);
            routes.delete('/:id',     UserController.remove);
        });

module.exports = routes;