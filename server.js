// simple express app
// import express from 'express';
import app from './src/config/express_app.js';
import http from "http";
import log4js from 'log4js';
import dotenv from "dotenv"; // properties
// opener is used to open the browser automatically
import opener from 'opener';

// 1. 환경설정
dotenv.config();

// 2. logger
var logger = log4js.getLogger();
logger.level = "debug";

// 3. server
const port = process.env.SERVER_PORT;
const httpServer = http.createServer(app);
const serverURL = `http://localhost:${port}`;

httpServer.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
});

//opener(serverURL);