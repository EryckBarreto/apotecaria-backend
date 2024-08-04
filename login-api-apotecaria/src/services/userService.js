const UserModel = require('../models/user');

async function signup(userDTO) {
    const userRecord = await UserModel.create(userDTO);
    const user = userRecord.toObject();
    
    delete user.password;

    return { user };
}

module.exports = {
    signup,
};