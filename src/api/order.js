import { Router } from 'express';
import log4js from 'log4js';

var logger = log4js.getLogger();
logger.level = "debug";

const orderAPI = Router();

orderAPI.post('/order', (req, res) => {
    logger.debug('orderAPI.post(/order) called');
    // method : POST
    // body : { id, pw }
    const { id, pw } = req.body;

    if (id === 'test' && pw === 'test') {
        res.status(200).json({
            resultCode: 'success',
            message: '주문 성공',
        });
    } else {
        res.status(200).json({
            resultCode: 'fail',
            message: '주문 실패',
        });
    }
});

orderAPI.get('/order', (req, res) => {
    logger.debug('orderAPI.get(/order) called');
    // method : get
    // params : sid
    const queryParams = req.query;
    const sid = queryParams.sid;

    console.log(`sid : ${sid}`);

    res.render('order',{
        sid: sid
    });
});

export default orderAPI;