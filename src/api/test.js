import { Router } from 'express';
import log4js from 'log4js';

var logger = log4js.getLogger();
logger.level = "debug";

const testAPI = Router();

const getQueryParams = (req,key) => {
    const queryParams = req.query;
    return queryParams[key];
}

testAPI.get('/200', (req, res) => {
    const testData = getQueryParams(req,'test');
    
    logger.debug('testAPI.get(/200) called');
    logger.debug(`testData : ${testData}`);

    res.status(200).json({
        resultCode: 'success',
        message: '200 OK',
    });
});

testAPI.get('/400', (req, res) => {
    const testData = getQueryParams(req,'test');

    logger.debug('testAPI.get(/400) called');
    logger.debug(`testData : ${testData}`);

    const testResult = {
        man : 'test',
    }

    res.status(400).json({
        resultCode: 'fail',
        message: '400 Bad Request',
        data: testResult,
    });
});

testAPI.get('/401', (req, res) => {
    const testData = getQueryParams(req,'test');

    logger.debug('testAPI.get(/401) called');
    logger.debug(`testData : ${testData}`);

    res.status(401).json({
        resultCode: 'fail',
        message: '401 Unauthorized',
    });
});

export default testAPI;