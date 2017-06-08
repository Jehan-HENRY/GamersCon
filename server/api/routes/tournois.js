import express from 'express';
import Tournoi from '../models/tournoi.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var tournoi = new Tournoi();

    router.get('/', Auth.hasAuthorization, tournoi.findAll);

    router.get('/:id', Auth.hasAuthorization, tournoi.findById);

    router.post('/', tournoi.create);

    router.put('/:id', Auth.hasAuthorization, tournoi.update);

    router.delete('/:id', Auth.hasAuthorization, tournoi.delete);

    app.use('/tournois', router);

};
