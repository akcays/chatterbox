const models = require('../models');
const bluebird = require('bluebird');

const userFields = ['username'];
const messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] }) // same as 'outer join'
        .complete((err, messages) => {
          res.json(messages);
        });
    },
    post: function (req, res) {
      User.findOrCreate({username: req.body[username]})
        .complete((err, user) => {
          const params = {
            text: req.body[text],
            userid: req.body[username],
            roomname: req.body[roomname]
          };
          Message.create(params)
            .complete((err, messages) => {
              res.sendStatus(201);
            });
        });
    }
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .complete((err, users) => {
          res.json(users);
        });
    },
    post: function (req, res) {
      User.create({username: req.body[username]})
        .complete((err, user) => {
          res.sendStatus(201);
        });
    }
  }
};