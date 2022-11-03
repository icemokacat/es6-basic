import express from "express";
import path from 'path';
import dotenv from "dotenv";
import apiRouter from './api_router.js';
import pageRouter from './page_router.js';
import log4js from 'log4js';

// 1. 환경설정
dotenv.config();

// 2. logger
var logger = log4js.getLogger();
logger.level = "debug";

// 3. 프로젝트 path 관련
const __projectPath     = path.resolve();
const __srcPath         = path.resolve(__projectPath, 'src');
const __publicPath      = path.join(__projectPath,'public');

const app = express();

// json 사용
app.use(express.json());

// 정적파일 설정
app.use('/public',express.static(__publicPath));

// view engine 세팅
// ejs
app.set('view engine','ejs');
app.set('views',__publicPath + '/app');

// index
app.get('/', (req, res) => {
    res.render('index');
});

// page router
app.use('/page', pageRouter);

// api router
app.use('/api', apiRouter);

// header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

export default app;