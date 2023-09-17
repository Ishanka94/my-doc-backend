const Form = require('../../models/form');

const getAllForms= async (req, res) => {
    console.log('method called bro');
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

module.exports = {
    getAllForms
}