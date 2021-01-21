const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true, validate: simpleString },
  name: { type: String, required: true, validate: simpleString },
  manufacturer: { type: String, required: true, validate: simpleString },
  description: { type: String, required: true, validate: complexeString },
  mainPepper: { type: String, required: true, validate: simpleString },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true, validate: simpleString },
  likes: { type: Number, default:0 },
  dislikes: { type: Number, default:0 },
  usersLiked: { type: [String], default:[] },
  usersDisliked: { type: [String], default:[] },
});

function simpleString (field) {
  let regex = "[^A-Za-z0-9\u00C0-\u017F]"; // La regex va relever les caractères spéciaux
  return field.match(regex) === null;
}

function complexeString (field) {
  let regex = "[^A-Za-z0-9\u00C0-\u017F,.;?!$£€ \"']"; // La regex va être moins restrictive que la première pour que les utilisateurs puissent rédiger une description digne de ce nom.
  return field.match(regex) === null;
}

module.exports = mongoose.model('Sauce', sauceSchema);