const path1 = require('path');

let exttypefn = function(thisURL){
    let exttype='';
    exttype=path1.extname(thisURL);
    if(exttype===''){
        exttype='html';
    }
    return exttype;
}

module.exports.exttypefn = exttypefn;