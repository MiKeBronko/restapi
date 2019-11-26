const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.findUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет таких!' });
      }
      return res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.mesage }));
};


module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { runValidators: true })
    .then((user) => {
      if (!user) {
        return res.staus(404).send({ message: 'нет таких' });
      }
      return res.send(user);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.updateAva = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true })
    .then((user) => {
      if (!user) {
        return res.staus(404).send({ message: 'упс нет такой персоны!' });
      }
      return res.send(user);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
