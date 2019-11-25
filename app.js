const express = require('express');

const app = express();
const mongoose = require('mongoose');
// const path = require('path');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const cards = require('./routes/cards');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


app.use((req, res, next) => {
  req.user = {
    _id: '5dd3e0673dd2fc0a70b25c5e',
  };
  console.log(req.user._id);
  next();
});

app.use('/', users);
app.use('/', cards);

const { PORT = 3000 } = process.env;

app.get('/*' || '*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
