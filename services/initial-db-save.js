const fs = require('fs');
const formPath = 'resources/default-form.json';

const insertInitialFormData = async (form) => {
    console.log('initial data insert');
    const allForms = await form.find();
    if (allForms && allForms.length > 0) {
        console.log('Initial form data already exists');
        return;
    }
    fs.readFile(formPath, 'utf8', async (err, file) => {

    // check for any errors
      if (err) {
        console.error('Error while reading the file:', err)
        return;
      }
      try {
        const formList = JSON.parse(file);
        if(allForms && allForms.length === 0) {
            console.log('Inserting initial form data');
            formList.forEach(async formDat => {
                try {
                    formDat.fields.forEach((item, index) => {
                      item['key'] = 'f_' + index;
                    })
                    const FormData = form(formDat);
                    const savedData = await FormData.save();
                    console.log('Default form data has been saved to the DB');
                } catch (e) {
                    console.error('Error while saving initial forms data:', e);
                }
            });
        }
      } catch (err) {
        console.error('Error while parsing JSON data:', err)
      }
});
};

module.exports = {
    insertInitialFormData,
}