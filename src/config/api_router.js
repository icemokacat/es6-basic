import { Router } from 'express';
import dotenv from "dotenv";
import log4js from 'log4js';

/**
 * import api routers 
 */
import loginAPI from '../api/login.js';
import orderAPI from '../api/order.js';

// 라우터
const apiRouter = Router();

// 로그인
apiRouter.use('/login', loginAPI);
// 주문
apiRouter.use('/order', orderAPI);

export default apiRouter;