/**
 * Created by Administrator on 2016/3/15.
 */
var express=require('express');
var fs=require('fs');
var app=express();
var formidable = require('formidable');
app.use(express.static(__dirname));
var bodyParser = require('body-parser')
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.bodyParser());

app.get('/index.html',function(request,response){
    readfileandresponse('/index.html',response)
    //response.sendfile(__dirname+'index.html')
    //response.writeHead(200,{'Content-type':'text.html'});
    //response.write('<head> <meta charset="utf-8"><title>使用post交互数据</title></head>');
    //response.end('你好')
})
app.post('/index.html',function(req,res){
    var formParser = new formidable.IncomingForm();
    ///用解析器解析请求体
    //把非file的input放在fields里
    //把文件类型的元素放在files里
    formParser.parse(req, function(err, fields, files) {
        fs.readFile(files.avatar.path,function(err,data){
            var filename = '/imgs/'+files.avatar.name;
            fs.writeFile('.'+filename,data,function(err){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(data);
            })
        })
    });



    //fs.readFile(JSON.stringify(request.body),function(err,data){
    //    if(err){
    //        console.log(err)
    //        response.send('读取文件失败')
    //    }else{
    //        console.log('读取成功')
    //    }
    //
    //})
})
app.listen(1337,'127.0.0.1');
//app.listen(1337,'127.0.0.1');
function readfileandresponse(pathname,response){
    fs.readFile(pathname.substr(1),'utf-8',function(err,data){
        if(err){
            response.writeHead(404);
            response.end('file not found')

        }else{
            response.end(data)
        }
    })
}