const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.karolRobles);
routes.get('/liz', lesson1Controller.lizAlbancando);
routes.get('/jose', lesson1Controller.joseRobles);

module.exports = routes;