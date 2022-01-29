const fs1 = require('fs');
const path1 = require('path');
const seeSQL = require('./mySQL');

let displayInWeb = function (fileNameForOpen, ContentType, reSponsed) {
    let path2 = path1.join(__dirname, "public", fileNameForOpen);

    fs1.readFile(path2,
        (err, data) => {
            if (err) {
                console.log(err);
                reSponsed.writeHead(400);
                reSponsed.end("Error in address : " + err.code, 'utf8');
            } else {
                // _______________ 
                if (ContentType === "Content-Type: text/html") {
                    let bytelike = decodeURI(encodeURIComponent(data));
                    // let bytelike = unescape(encodeURIComponent(data));
                    let str1 = seeSQL.seeSQL(fileNameForOpen, 1); 
                    bytelike = bytelike.replace(/{t1}/g, str1.page_title);
                    bytelike = bytelike.replace(/{t2}/g, str1.page_str1);
                    // data = bytelike.replace(/Personal/g, str1.page_str2);
                    data = (bytelike.replace(/Personal/g, str1.page_str2));

                }
                // __________________
                reSponsed.writeHead(200, {
                    ContentType
                })
                // data=(data.replace( newData,'Personal'));
                reSponsed.end(data, 'utf8');
            }
        });
    return;
}

module.exports.displayInWeb = displayInWeb;