import mongoose from 'mongoose';


const gameSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },

});
