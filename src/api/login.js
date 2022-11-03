import { Router } from 'express';
import log4js from 'log4js';

var logger = log4js.getLogger();
logger.level = "debug";

const loginAPI = Router();

loginAPI.post('/login', (req, res) => {
    logger.debug('loginAPI.post(/login)');
    const { id, pw } = req.body;

    if (id === 'test' && pw === 'test') {
        res.status(200).json({
            resultCode: 'success',
            message: '로그인 성공',
        });
    } else {
        res.status(200).json({
            resultCode: 'fail',
            message: '로그인 실패',
        });
    }
});

export default loginAPI;