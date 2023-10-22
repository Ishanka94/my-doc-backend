const AppInfo = require('../../models/appInfo');
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const getAppInfo= async (req, res) => {
    const appInfo = await AppInfo.find();
    if(appInfo) {
        return sendResponse(res, httpStatus.OK , appInfo);
    }
}

module.exports = {
    getAppInfo,
}