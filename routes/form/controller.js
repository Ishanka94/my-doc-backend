const Form = require('../../models/form');

const getAllForms= async (req, res) => {
    const allForms = await Form.find();
    console.log(allForms);
    // logger.log(`[REPORT][REQUEST] Get stock report request received`);
    // const [err, reportRes] = await to(reportService.getStockReport());
    // if (err) {
    //     const { statusCode } = err;
    //     logger.log(`[REPORT][RESPONSE][ERROR] Error while getting stock report | statusCode: ${statusCode}`);
    //     return res.status(statusCode).json(err);
    // }
    // const { data } = reportRes;
    // logger.log(`[REPORT][RESPONSE][SUCCESS] stock report received successfully | data: ${JSON.stringify(data?data:'')}`);
    // return res.status(httpStatus.OK).json(data);
}

const createForm = async (req, res) => {
    // logger.log(`[PRODUCT][REQUEST] create category request received|data:${JSON.stringify(req.body?req.body:'')}`);
    const FormData = Form(req.body);
    await FormData.save();
    // const saveResult = await to(FormData.save(), res);
    // if (saveResult) {
    //     logger.log(`[PRODUCT][RESPONSE][SUCCESS] category created successfully`);
    //     return sendResponse(res, httpStatus.OK, saveResult);
    // }
    // logger.log(`[PRODUCT][RESPONSE][ERROR] Error while creating category`); 
    // sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR,  'Something went wrong, please try again');
};

module.exports = {
    getAllForms,
    createForm
}