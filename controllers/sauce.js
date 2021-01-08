const Sauce = require('../models/sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => { res.status(200).json(sauce) })
  .catch(error => { res.status(404).json({ error: error }) });
};

exports.modifySauce = (req, res, next) => {
  if (req.file) {
      Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
          const filename = sauce.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {});
        })
      }
      const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
  Sauce.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      let statusMessage,
          indexOfUserInUserLiked = sauce.usersLiked.indexOf(req.body.userId),
          indexOfUserInUserDisliked = sauce.usersDisliked.indexOf(req.body.userId);

      // Est-ce que l'user a déjà voté ?
      if (indexOfUserInUserLiked !== -1) { // L'user a déjà dit qu'il aimait la sauce
        // On efface son ancien vote
        sauce.likes--;
        sauce.usersLiked.splice(indexOfUserInUserLiked, 1);
      }
      if (indexOfUserInUserDisliked !== -1) { // L'user a déjà dit qu'il n'aimait pas la sauce
        // On efface son ancien vote
        sauce.dislikes--;
        sauce.usersDisliked.splice(indexOfUserInUserDisliked, 1);
      }

      // On met en place son nouveau vote
      switch (req.body.like) {
        case 1:
          sauce.likes++;
          sauce.usersLiked.push(req.body.userId);
          statusMessage = "Sauce likée !";
          break;
        case 0:
          statusMessage = "Sauce ignorée !";
          break;
        case -1:
          sauce.dislikes++;
          sauce.usersDisliked.push(req.body.userId);
          statusMessage = "Sauce dislikée !";     
          break;
      }
      Sauce.updateOne({ _id: req.params.id }, {...sauce._doc, _id: req.params.id} )
      .then(() => res.status(200).json({ message: "statusMessage"}))
      .catch(error => res.status(500).json({ error }));
    })
    
    

};
