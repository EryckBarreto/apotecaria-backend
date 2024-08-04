const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = async ({ expressApp }) => {
    await mongooseLoader();
    console.log('MongoDB está funcionando supimpa.');
    
    await expressLoader({ app: expressApp });
    console.log('Express está funcionando supimpa.');
};