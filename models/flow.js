const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const FlowSchema = new Schema({
    childFormRef: {
        type: Schema.Types.ObjectId,
        ref: "Form"
    },
    name: {
        type: Schema.Types.String,
        require: true,
    },
    childFormId: {
        type: Schema.Types.String,
        // require: true,
    },
    parentFormId: {
        type: Schema.Types.String,
        // require: true,
    },
    path: {
        type: Schema.Types.String 
    }
}, {collection : 'Flow'});

module.exports = Flow = conn.myDocDB.model('Flow', FlowSchema);