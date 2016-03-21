/**
 * Created by Administrator on 2016/3/4.
 */
var express=require('express');
var http=require('http');
var url=require('url');
var fs=require('fs');
var mysql=require('mysql');
var querystring=require('querystring');
//
var app=express();
var pool=mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    database:'mysql',
    password:''
})
app.get('/index.html',function(req,res){
    res.writeHead(200,{'Content-type':'text.html'});
    res.write('<head> <meta charset="utf-8"><title>使用post交互数据</title></head>');
    var file=fs.createReadStream('/index.html');
    file.pipe(res)

})
app.post('/index.html',function(req,res){
    req.on('data',function(data){
        var obj=querystring.parse(data.toString());
        console.log(obj)
        //pool.getConnection(function(err,connection){
        //    if(err) res.send('与数据库连接失败')
        //    else{
        //        var str;
        //        connection.query('INSERT INTO test admin ?',
        //            {name:obj.username,password:obj.firstname},
        //            function(err,result){
        //
        //                if(err) {str='在服务器端插入数据失败'
        //                console.log(err)}
        //                else str='在服务器端插入数据成功'
        //                connection.release()
        //                res.send(str)
        //            }
        //        )
        //    }
        //
        //})

    })
})
app.listen(1337,'127.0.0.1');