const { Router } = require('express');
const routes = new Router();

// Controllers
const DoctorController = require('./contollers/DoctorController');


routes.get('/', (req, res) => res.send({ message: "Nada aqui..." }));

routes.get('/medicos',            DoctorController.index);
routes.get('/medicos/:id',        DoctorController.show);
routes.get('/medicos/find/:term', DoctorController.search);

routes.post('/medicos',    DoctorController.add);
routes.put('/medicos/:id', DoctorController.editComplete);
routes.patch('/medicos/:id', DoctorController.edit);

routes.delete('/medicos/:id', DoctorController.remove);

module.exports = routes;