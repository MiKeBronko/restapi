const express = require('express');

const app = express();
const mongoose = require('mongoose');
const path = require('path');
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

app.use('/', users);

app.use((req, res, next) => {
  req.user = {
    _id: '5dd948e1cef68f1fecdbbf32',
  };
  next();
});

app.use('/', cards);


const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*' || '*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
