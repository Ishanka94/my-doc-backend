const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const FormSchema = new Schema({
    buyerId: {
        type: Schema.Types.String,
        require: true,
    },
    name: {
        type: Schema.Types.String,
        require: true,
    },
    address1: {
        type: Schema.Types.String,
        require: true,
    },
    address2: {
        type: Schema.Types.String,
        require: true,
    },
    address3: {
        type: Schema.Types.String,
        require: true,
    },
    contact: {
        type: Schema.Types.String,
        require: true,
    },
    deliveryDate: {
        type: Schema.Types.Date,
        require: true,
    }
});

module.exports = Form = conn.myDocDB.model('Form', FormSchema);