const users = require('express').Router();

const { getUsers, createUser, findUser, updateUser, updateAva } = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/:userId', findUser);
users.post('/users', createUser);
users.patch('/users/me', updateUser);
users.patch('/users/me/avatar', updateAva);

module.exports = users;
