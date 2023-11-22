const Form = require('../../models/form');
const Flow = require('../../models/flow');
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const getAllForms= async (req, res) => {
    const allForms = await Form.find();
    return sendResponse(res, httpStatus.OK , allForms);
}

const createForm = async (req, res) => {
    const FormData = Form(req.body);
    const savedData = await FormData.save();
    if (savedData) {
        return sendResponse(res, httpStatus.OK , savedData);
    }};

const getFormByPath= async (req, res) => {
    let childForm;
    let filteredForms;
    if (!req?.body?.parentFormId) {
        const defFormPath = process.env.DEFAULT_FORM_PATH;
        filteredForms = await Flow.find({path: defFormPath}).populate({path: 'childFormRef', model: Form});
    }
    filteredForms = await Flow.find({$and: [{parentFormId : req?.body?.parentFormId}, {path: req?.body?.path}]}).populate({path: 'childFormRef', model: Form});
    if (filteredForms && filteredForms.length > 0) {
        childForm = filteredForms[0].childFormRef;
    }
    return sendResponse(res, httpStatus.OK , childForm);
}

module.exports = {
    getAllForms,
    createForm,
    getFormByPath
}