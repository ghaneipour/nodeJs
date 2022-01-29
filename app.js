//2022 jan 27
// nodemon app.js
// _______________________________________
// const path1 = require('path');
const http1 = require('http');
const chkFileFormat = require('./chkFileFormat'); // can detect file type: .jpg is image
const routeFiles = require('./routeFiles'); //
// const readFileSS = require('./readFileSS');
// const fs1 = require('fs');
// const seeSQL = require('./mySQL');
const exttypefn = require('./exttypefn');
const displayInWeb = require('./displayInWeb');
// _______________________________________
let fileNameForOpen = 'index.html';
let ContentType = 'Content-Type: text/html';
let extType = 'html';

// ___________________________________
const server = http1.createServer(
    (reQuested, reSponsed) => {

        console.log("___________");
        console.log(reQuested.url);

        extType = exttypefn.exttypefn(reQuested.url);
        console.log("process extType:" + extType);

        ContentType = chkFileFormat.chkFileFormat(extType);
        console.log("process ContentType:" + ContentType);

        fileNameForOpen = routeFiles.routeFiles(reQuested);
        console.log("process fileNameForOpen:" + fileNameForOpen);
        // ________________
        displayInWeb.displayInWeb(fileNameForOpen,ContentType,reSponsed);
        //_________________
    /*    let data = readFileSS.readFileSS(fileNameForOpen);
        // console.log(data);
        if (data === 'ERR') {
            reSponsed.writeHead(400);
            reSponsed.end("Error in address : " + err.code, 'utf8');
        } else {
            reSponsed.writeHead(200, {
                ContentType
            });

            console.log(ContentType);
            // __________________
            if (ContentType === "Content-Type: text/html" &&
                fileNameForOpen.includes('.html') === true
            ) {
                // console.log(">>1>>:" + path1.basename(path22));
                // seeSQL.seeSQL(fileNameForOpen, 1);
                // console.log(">>p22>>:" + path22);
            }
            // data=(data.replace( newData,'Personal'));
            // __________________
            // reSponsed.write();
            reSponsed.end(data, 'utf8');
        }*/
    });

server.listen(3333, () => {
    console.log('listen 3333 ok');
});