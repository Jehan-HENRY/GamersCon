import mongoose from 'mongoose';


const gameSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  plateform: {
    type: String,
    required: true
  },
  jrsmax: {
    type: String,
    required: true
  }
});

let model = mongoose.model('Game', gameSchema);

export default class Game {

  findAll(req, res) {
    model.find({},
      (err, game) => {
        if (err || !game) {
          res.sendStatus(403);
        } else {
          res.json(game);
        }
      });
  }

  findById(req, res) {
    model.findById(req.params.id,
      (err, game) => {
        if (err || !game) {
          res.sendStatus(403);
        } else {
          res.json(game);
        }
      });
  }

  create(req, res) {
    model.create(req.body,
      (err, game) => {
        if (err || !game) {
          res.status(500).send(err.message);
        } else {
          res.json(game);
        }
      });
  }

  update(req, res) {
    model.update({
      _id: req.params.id
    }, req.body, (err, game) => {
      if (err || !game) {
        res.status(500).send(err.message);
      } else {
        res.json(game);
      }
    });
  }

  delete(req, res) {
    model.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.sendStatus(200);
      }
    });
  }
}
