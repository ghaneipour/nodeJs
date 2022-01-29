var mysql = require('mysql');

let newData = '';

let seeSQL = function (pageName, id_page) {
    console.log("SQL_fn : ", pageName, id_page);

    // seeSQL.seeSQL(path1.basename(path2), )
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydbtestped"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("MySQL Connected ok!");

        let sql = "SELECT * FROM sitepage where pageName='" + pageName + "';";// and id_page=" + id_page + ";";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                newData= 'false';
            } else {
                console.log(result);
                console.log(result[0].page_seo, "<<<seo>>>");
                // newData= result[0].page_seo;
                newData= result[0];
            }
        });
    });
    return newData;
}

module.exports.seeSQL = seeSQL;
            
            // console.log(result);

            // newData = result[0].page_seo;
            // console.log("newResult: ");
            // console.log(newData);

            // console.log("ournewResult: ");
            // console.log(newData);
            // newData = result[1].page_title;
            // let str = data.toString(); //' my data is:Personal.Twas the night before Xmas...';
            // let newstr = str.replace('blog', 'newData1');
            // console.log('mynewData 1: ');
            // console.log(newstr);
            //  newstr = str.replace('newData2' ,'blog');
            // console.log('mynewstr 2: ');
            // console.log(newstr);
            // console.log(data);
            // res.writeHead(200, {
            //     ContentType
            // })
            // let newDATAs=data;//.replace('result[0].page_seo', 'blog');
            // res.end( newDATAs, 'utf8');
            //return;
