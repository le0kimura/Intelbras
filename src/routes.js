const express = require('express');
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.get('/users/BuscaAlteracao', UserController.buscaPeriodoAlteracao);
routes.get('/users/BuscaNome', UserController.buscaNome);
routes.get('/users/BuscaMatricula', UserController.buscaMatricula);

routes.post('/users/Alterar', UserController.updateUser);

routes.get('/users/Remover', UserController.removeUser);

routes.post('/users', UserController.store);

module.exports = routes;