const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');
const formStatus = require('../constants/form-status');
const initialDbSave = require('../services/initial-db-save');

const FormSchema = new Schema({
    formId: {
        type: Schema.Types.String,
        require: false,
        // unique: true,
    },
    color: {
        type: Schema.Types.String,
    },
    formType: {
        type: Schema.Types.String,   
    },
    fields: {
        type: Schema.Types.Array,
        require: true,
    },
    status: {
        type: Schema.Types.String,
        default: formStatus.ACTIVE,
    },
    childFormRef: {
        type: Schema.Types.String,
        require: true,
    }
}, {collection : 'Form'});

const Form = conn.myDocDB.model('Form', FormSchema);

// initialDbSave.insertInitialFormData(Form);

module.exports = Form;