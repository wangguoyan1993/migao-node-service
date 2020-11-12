import axios = require('axios');
import path = require('path');
import fs = require('fs');
import express = require('express');
const router = express.Router();

// 资源目录
const RESOURCE_ROOT = path.resolve(__dirname, '../../resource/');

// 检查并创建资源目录
if (!fs.existsSync(RESOURCE_ROOT)) fs.mkdirSync(RESOURCE_ROOT);

class Crawler {
    private homePage:string = 'https://www.yun993.net/c/98/';

    /**
     * 创建目录
     * @param path 目录路径
     */
    private createDir(path: string){
        if(!fs.existsSync(path)) fs.mkdirSync(path);
    }

    private index(){

    }
}