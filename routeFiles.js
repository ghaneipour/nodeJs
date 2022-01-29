const path1 = require('path');

let routeFiles = function (req) {
    let Address = '/';
    let getURL = req.url;
    // let getURL = path1.basename(req.url);

    if (getURL.includes('?')) {
        getURL = getURL.split('?')[0];
    }
    // __________________________
    if (getURL === '/' || getURL === '') {
        Address = 'index.html';
    } else if (getURL === '/about') {
        Address = 'about.html';
    } else {
        // if (!getURL.includes('.') && !getURL.includes('.css')) {
        //     getURL += '.html';
        // }
        Address = getURL; //'index.html';
    }
    return Address;
}
// let ext = req.url;
module.exports.routeFiles = routeFiles;