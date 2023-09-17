const mongoose = require('mongoose');

const dbURI = process.env.ATLAS_URI;
const myDocDB = mongoose.createConnection(dbURI, { useNewUrlParser: true });

myDocDB.on('connected', () => {
    console.log('connected to myDoc db');
});


module.exports = { myDocDB};