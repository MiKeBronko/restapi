const Card = require('../models/card');

module.exports.getCard = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};


module.exports.likeCard = (req, res) => {
  console.log(req.params.cardId);
  Card.findByIdAndUpdate(req.params.cardId)
    .then((cardId) => {
      if (!cardId) {
        return res.status(404).send({ message: 'нет такой карточки'});
      }
      return res.send({ $addToSet: { likes: req.user._id } },
        { new: true });// добавить _id в массив, если его там нет
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
);
