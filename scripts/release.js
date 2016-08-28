#!/usr/bin/env node
const exec = require('child_process').exec;
const readdirSync = require('fs').readdirSync;
const path = require('path');
const join = path.join;
const extname = path.extname;
const async = require('async');
const i18nPath = join(__dirname, '..', 'i18n');

const languages = readdirSync(i18nPath)
    .filter((fileName) => extname(fileName) === '.properties')
    .map(fileName => fileName.slice(0, fileName.indexOf('.')));

const queue = async.queue((language, callback) => {
    exec('npm run build', {
        cwd: join(__dirname, '..'),
        env: Object.assign(process.env, {
            LOCALE: language,
        }),
    }, (error) => {
        if (!error) {
            console.log('Building', language, 'Succeed!');
            callback(null, true);
        } else {
            console.log('Building', language, 'Fail!');
            callback(null, false);
            process.exit(1);
        }
    });
}, 2);

queue.push(languages);

queue.drain = () => {
    console.log('Building all assets Succeed!');
};
