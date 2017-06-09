import express from 'express';
import Game from '../models/game.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var game = new Game();

    router.get('/', Auth.hasAuthorization, game.findAll);

    router.get('/:id', Auth.hasAuthorization, game.findById);

    router.post('/', game.create);

    router.put('/:id', Auth.hasAuthorization, game.update);

    router.delete('/:id', Auth.hasAuthorization, game.delete);

    app.use('/games', router);

};
