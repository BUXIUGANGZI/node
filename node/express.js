/**
 * Created by Administrator on 2016/3/3.
 */
var express=require('express');
var http=require('http');
var url=require('url');
var fs=require('fs');

var app=express();

var ss='/index.html/:id/:name'
app.get('/i*.html/:id?/:name?',function(request,response){
    //var urlObj=url.parse(request.url);
    //var pathname=urlObj.pathname;
    //if(pathname==='/index.html'){
    //    readfileandresponse('/index.html',response)
    //}
    var str="";
    if(request.params.id){
        str+="ID参数值："+request.params.id
    }
    if(request.params.name){
        str+="name参数值："+request.params.name
    }

    //for(var key in request.params){
    //        str+='参数名'+key;
    //        str+=String.fromCharCode(9)+"参数值："+request.params[key]
    //    str+="<br/>"
    //
    //
    //}
    response.send(str)



})
app.listen(1337,'127.0.0.1');

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