const path1 = require('path');
const fs1 = require('fs');
let path22 = '/';
let dataTosend = '';

let readFileSS = function (path3) {
    console.log("path3=" + path3);

    path22 = path1.join(__dirname, "public", path3);
    fs1.readFile(path22,
        (err, data) => {
            if (err) {
                console.log(err);
                dataTosend = 'ERR';
            } else {
                dataTosend = data;
            }
        });  
    return dataTosend;
};


module.exports.readFileSS = readFileSS;