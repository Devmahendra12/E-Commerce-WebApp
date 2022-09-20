const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');


module.exports = User = mongoose.model('user',UserSchema);