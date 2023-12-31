const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const FormSchema = new Schema({
    name: {
        type: Schema.Types.String,
        require: true,
    },
    // address: {
    //     type: Schema.Types.String,
    //     require: true,
    // },
    // contact: {
    //     type: Schema.Types.String,
    //     require: true,
    // },
    childFormRef: {
        type: Schema.Types.String,
        require: true,
    },
    label: {
        type: Schema.Types.String,
        require: true,
    },
    type: {
        type: Schema.Types.String,
        require: true,
    },
    required: {
        type: Schema.Types.String,
        require: true,
    },
    key: {
        type: Schema.Types.String,
        require: true,
    },
    bold: {
        type: Schema.Types.String,
        require: false,
    }
}, {collection : 'Form'});

module.exports = Form = conn.myDocDB.model('Form', FormSchema);