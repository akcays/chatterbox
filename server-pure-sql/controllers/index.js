const models = require('../models');
const bluebird = require('bluebird');

const userFields = ['username'];
const messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messages) => {
        res.json(messages);
      })
    },
    post: function (req, res) {
      const params = [req.body[text], req.body[username], req.body[roomname]];
      models.messages.post(params, (err, messages) => {
        res.json(messages);
      })
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, users) => {
        res.json(users);
      });
    },
    post: function (req, res) {
      const params = [req.body[username]];
      models.users.post(params, (err, users) => {
        res.json(users);
      });
    }
  }
};