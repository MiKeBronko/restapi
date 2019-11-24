const users = require('express').Router();

const { getUsers, createUser, findUser } = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/:userId', findUser);
users.post('/users', createUser);


module.exports = users;
