import mongoose from 'mongoose';


const tournoiSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  jeu: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  lieu: {
    type: String
  },
  mise: {
    type: String
  },
  image: {
    data: Buffer,
    contentType: String
  },
  nbjrs: {
    type: String,
    required: true
  }
});

let model = mongoose.model('Tournoi', tournoiSchema);

export default class Tournoi {

  findAll(req, res) {
    model.find({},
      (err, tournoi) => {
        if (err || !tournoi) {
          res.sendStatus(403);
        } else {
          res.json(tournoi);
        }
      });
  }

  // findByName(req, res) {
  //   model.find({
  //       nom: req.params.nom
  //     },
  //     (err, tournoi) => {
  //       if (err || !tournoi) {
  //         res.sendStatus(403);
  //       } else {
  //         res.json(tournoi);
  //       }
  //     });
  // }

  findById(req, res) {
    model.findById(req.params.id,
      (err, tournoi) => {
        if (err || !tournoi) {
          res.sendStatus(403);
        } else {
          res.json(tournoi);
        }
      });
  }

  create(req, res) {
    model.create(req.body,
      (err, tournoi) => {
        if (err || !tournoi) {
          res.status(500).send(err.message);
        } else {
          res.json(tournoi);
        }
      });
  }

  update(req, res) {
    model.update({
      _id: req.params.id
    }, req.body, (err, tournoi) => {
      if (err || !tournoi) {
        res.status(500).send(err.message);
      } else {
        res.json(tournoi);
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
