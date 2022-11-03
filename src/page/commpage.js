import { Router } from 'express';
import log4js from 'log4js';

var logger = log4js.getLogger();
logger.level = "debug";

const commPage = Router();
const parentPath = '/login/';

// 메인
commPage.get('/login', function (req, res) {
    res.render(parentPath+'login');
})

export default commPage;