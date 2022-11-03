import { Router } from 'express';
import path from 'path';
import dotenv from "dotenv";
import log4js from 'log4js';

/**
 * import api routers 
 */
import commPage from '../page/commpage.js';
import orderPage from '../page/order.js';

// 라우터
const pageRouter = Router();

// 공통
pageRouter.use(commPage);
// 주문
pageRouter.use('/order', orderPage);

export default pageRouter;