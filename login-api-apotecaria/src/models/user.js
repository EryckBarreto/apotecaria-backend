const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserModelSchema = new mongoose.Schema({
    completeUserName:    { type: String, required: true },
    emailUser:           { type: String, required: true, unique: true },
    phoneUser:           { type: String, required: true },
    cpfUser:             { type: String, required: true, unique: true },
    dateOfBirthUser:     { type: Date,   required: true },
    passwordUser:        { type: String, required: true },
});

UserModelSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('passwordUser')) return next();
    const salt = await bcrypt.genSalt(10);
    user.passwordUser = await bcrypt.hash(user.passwordUser, salt);
    next();
});

module.exports = mongoose.model('User', UserModelSchema);