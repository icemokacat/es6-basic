import { Router } from 'express';
import log4js from 'log4js';

var logger = log4js.getLogger();
logger.level = "debug";

const orderPage = Router();

const parentPath = '/order/';

// request /order/**

// 메인
orderPage.get('/', function (req, res) {
    logger.info('orderPage.get(/)');
    res.render(parentPath+'main');
})

export default orderPage;