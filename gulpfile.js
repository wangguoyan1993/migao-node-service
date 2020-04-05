/*
 * Filename: e:\projects\migao-node-service\gulpfile.js
 * Path: e:\projects\migao-node-service
 * Created Date: Sunday, April 5th 2020, 11:51:10 pm
 * Author: wangguoyan
 * 
 * Copyright (c) 2020 migao.pub
 * Description: 编译文件
 */

let gulp = require('gulp');
let babel = require('gulp-babel');
let path = require('path');
let del = require('del');
let plumber = require('gulp-plumber');

let rootDir = path.resolve(__dirname);
let srcRoot = `${rootDir}/src`;
let buildRoot = `${rootDir}/build`;

let babelConfig = {
    presets: [
        '@babel/env',
        '@babel/preset-typescript',
        'minify'
    ]
}

gulp.task(`del`, gulp.series((callback) => {
    del(buildRoot);
    callback();
}));

gulp.task(`build`, gulp.series((callback) => {
    // app主文件
    gulp.src([`${srcRoot}/app.ts`])
        .pipe(plumber())
        .pipe(babel(babelConfig))
        .pipe(gulp.dest(`${buildRoot}/`))
        .pipe(plumber.stop());

    gulp.src([`${srcRoot}/bin/www.ts`])
        .pipe(babel(babelConfig))
        .pipe(gulp.dest(`${buildRoot}/bin/`));

    // 接口文件
    gulp.src([`${srcRoot}/routes/*.ts`])
        .pipe(babel(babelConfig))
        .pipe(gulp.dest(`${buildRoot}/routes/`));

    // jade模板文件
    gulp.src([`${srcRoot}/views/*.*`])
        .pipe(gulp.dest(`${buildRoot}/views/`));

    // 样式文件
    gulp.src([`${srcRoot}/public/stylesheets/*`])
        .pipe(gulp.dest(`${buildRoot}/public/stylesheets/`));

    // public 资源下除样式文件以外的文件
    gulp.src([`${srcRoot}/public/*`, `!${srcRoot}/public/stylesheets/*`])
        .pipe(gulp.dest(`${buildRoot}/public/`));

    callback();
}));