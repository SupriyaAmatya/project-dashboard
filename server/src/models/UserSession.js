const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
  token: { type: String, unique: true },
  active: { type: Boolean, default: true },
});

module.exports = UserSession = mongoose.model('usersession', UserSessionSchema);
