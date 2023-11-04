const mongoose = require('mongoose');
const fs = require('fs');
const formPath = 'resources/default-form.json';
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');
const formStatus = require('../constants/form-status');

const FormSchema = new Schema({
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

fs.readFile(formPath, 'utf8', async (err, file) => {

    // check for any errors
      if (err) {
        console.error('Error while reading the file:', err)
        return;
      }
      try {
        const data = JSON.parse(file);
        const allForms = await Form.find();
        if(allForms && allForms.length === 0) {
            const FormData = Form(data);
            const savedData = await FormData.save();
            console.log('Default form data have been saved to the DB');
        }
      } catch (err) {
        console.error('Error while parsing JSON data:', err)
      }
});

module.exports = Form;