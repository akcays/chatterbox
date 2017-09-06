const db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      const queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages \
        LEFT OUTER JOIN users ON (messages.user_id = users.id) ORDER BY messages.id DESC';
      db.query(queryStr, (err, messages) => {
        cb(messages);
      });
    },
    post: function (params, cb) {
      const queryStr = 'INSERT INTO messages(text, user_id, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
      db.query(queryStr, params, (err, messages) => {
        cb(messages);
      })
    }
  },

  users: {
    get: function (cb) {
      const queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, users) => {
        cb(users);
      });
    },
    post: function (params, cb) {
      const queryStr = 'INSERT INTO users(username) VALUES (?)';
      db.query(queryStr, params, (err, users) => {
        cb(users);
      })
    }
  }
};