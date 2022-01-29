let chkFileFormat = function (exttype) {
    let ContentType = 'Content-Type: text/html';
    switch (exttype) {

        case '.aac':
            ContentType = "Content-Type: audio/aac";
            break;
        case '.abw':
            ContentType = "Content-Type: application/x-abiword";
            break;
        case '.arc':
            ContentType = "Content-Type: application/x-freearc";
            break;
        case '.avif':
            ContentType = "Content-Type: image/avif";
            break;
        case '.avi':
            ContentType = "Content-Type: video/x-msvideo";
            break;
        case '.azw':
            ContentType = "Content-Type: application/vnd.amazon.ebook";
            break;
        case '.bin':
            ContentType = "Content-Type: application/octet-stream";
            break;
        case '.bmp':
            ContentType = "Content-Type: image/bmp";
            break;
        case '.bz':
            ContentType = "Content-Type: application/x-bzip";
            break;
        case '.bz2':
            ContentType = "Content-Type: application/x-bzip2";
            break;
        case '.cda':
            ContentType = "Content-Type: application/x-cdf";
            break;
        case '.csh':
            ContentType = "Content-Type: application/x-csh";
            break;
        case '.css':
            ContentType = "Content-Type: text/css";
            break;
        case '.csv':
            ContentType = "Content-Type: text/csv";
            break;
        case '.doc':
            ContentType = "Content-Type: application/msword";
            break;
        case '.docx':
            ContentType = "Content-Type: application/vnd ";
            break;
        case '.eot':
            ContentType = "Content-Type: application/vnd.ms-fontobject";
            break;
        case '.epub':
            ContentType = "Content-Type: application/epub+zip";
            break;
        case '.gz':
            ContentType = "Content-Type: application/gzip";
            break;
        case '.gif':
            ContentType = "Content-Type: image/gif";
            break;
        case '.htm':
        case '.html':
        case '/':
        case '':
            ContentType = "Content-Type: text/html";
            break;
        case '.ico':
            ContentType = "Content-Type: image/vnd.microsoft.icon";
            break;
        case '.ics':
            ContentType = "Content-Type: text/calendar";
            break;
        case '.jar':
            ContentType = "Content-Type: application/java-archive";
            break;
        case '.jpeg':
        case '.jpg':
            ContentType = "Content-Type: image/jpeg";
            break;
        case '.js':
            ContentType = "Content-Type: text/javascript";
            break;
        case '.json':
            ContentType = "Content-Type: application/json";
            break;
        case '.jsonld':
            ContentType = "Content-Type: application/ld+json";
            break;
        case '.mid':
        case '.midi':
            ContentType = "Content-Type: audio/midi";
            break;
        case '.mjs':
            ContentType = "Content-Type: text/javascript";
            break;
        case '.mp3':
            ContentType = "Content-Type: audio/mpeg";
            break;
        case '.mp4':
            ContentType = "Content-Type: video/mp4";
            break;
        case '.mpeg':
            ContentType = "Content-Type: video/mpeg";
            break;
        case '.mpkg':
            ContentType = "Content-Type: application/vnd.apple.installer+xml";
            break;
        case '.odp':
            ContentType = "Content-Type: application/vnd.oasis.opendocument.presentation";
            break;
        case '.ods':
            ContentType = "Content-Type: application/vnd.oasis.opendocument.spreadsheet";
            break;
        case '.odt':
            ContentType = "Content-Type: application/vnd.oasis.opendocument.text";
            break;
        case '.oga':
            ContentType = "Content-Type: audio/ogg";
            break;
        case '.ogv':
            ContentType = "Content-Type: video/ogg";
            break;
        case '.ogx':
            ContentType = "Content-Type: application/ogg";
            break;
        case '.opus':
            ContentType = "Content-Type: audio/opus";
            break;
        case '.otf':
            ContentType = "Content-Type: font/otf";
            break;
        case '.png':
            ContentType = "Content-Type: image/png";
            break;
        case '.pdf':
            ContentType = "Content-Type: application/pdf";
            break;
        case '.php':
            ContentType = "Content-Type: application/x-httpd-php";
            break;
        case '.ppt':
            ContentType = "Content-Type: application/vnd.ms-powerpoint";
            break;
        case '.pptx':
            ContentType = "Content-Type: application/vnd";
            break;
        case '.rar':
            ContentType = "Content-Type: application/vnd.rar";
            break;
        case '.rtf':
            ContentType = "Content-Type: application/rtf";
            break;
        case '.sh':
            ContentType = "Content-Type: application/x-sh";
            break;
        case '.svg':
            ContentType = "Content-Type: image/svg+xml";
            break;
        case '.swf':
            ContentType = "Content-Type: application/x-shockwave-flash";
            break;
        case '.tar':
            ContentType = "Content-Type: application/x-tar";
            break;
        case '.tif':
        case '.tiff':
            ContentType = "Content-Type: image/tiff";
            break;
        case '.ts':
            ContentType = "Content-Type: video/mp2t";
            break;
        case '.ttf':
            ContentType = "Content-Type: font/ttf";
            break;
        case '.txt':
            ContentType = "Content-Type: text/plain";
            break;
        case '.vsd':
            ContentType = "Content-Type: application/vnd.visio";
            break;
        case '.wav':
            ContentType = "Content-Type: audio/wav";
            break;
        case '.weba':
            ContentType = "Content-Type: audio/webm";
            break;
        case '.webm':
            ContentType = "Content-Type: video/webm";
            break;
        case '.webp':
            ContentType = "Content-Type: image/webp";
            break;
        case '.woff':
            ContentType = "Content-Type: font/woff";
            break;
        case '.woff2':
            ContentType = "Content-Type: font/woff2";
            break;
        case '.xhtml':
            ContentType = "Content-Type: application/xhtml+xml";
            break;
        case '.xls':
            ContentType = "Content-Type: application/vnd.ms-excel";
            break;
        case '.xlsx':
            ContentType = "Content-Type: application/vnd";
            break;
        case '.xml':
            ContentType = "Content-Type: application/xml";
            break;
        case '.xul':
            ContentType = "Content-Type: application/vnd.mozilla.xul+xml";
            break;
        case '.zip':
            ContentType = "Content-Type: application/zip";
            break;
        case '.3gp':
            ContentType = "Content-Type: video/3gpp;";
            break;
        case '.3g2':
            ContentType = "Content-Type: video/3gpp2";
            break;
        case '.7z':
            ContentType = "Content-Type: application/x-7z-compressed";
            break;
    }
    return ContentType;
};


module.exports.chkFileFormat = chkFileFormat;