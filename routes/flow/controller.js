const Flow = require('../../models/flow');
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const getAllFlows= async (req, res) => {
    const allFlows = await Flow.find();
    return sendResponse(res, httpStatus.OK , allFlows);
}

const createFlow = async (req, res) => {
    const flowData = Flow(req.body);
    const savedData = await flowData.save();
    if (savedData) {
        return sendResponse(res, httpStatus.OK , savedData);
    }
};

module.exports = {
    getAllFlows,
    createFlow
}