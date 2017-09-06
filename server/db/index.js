const Sequelize = require('Sequelize');
const orm = new Sequelize('chat', 'root', '');

const User = orm.define('User', {
  username: Sequelize.STRING
});

const Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
