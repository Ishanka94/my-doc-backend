const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const AppInfoSchema = new Schema({
    name: {
        type: Schema.Types.String,
        require: true,
    },
    version: {
        type: Schema.Types.String,
        require: true,
    }
}, {collection : 'AppInfo'});

module.exports = AppInfo = conn.myDocDB.model('AppInfo', AppInfoSchema);