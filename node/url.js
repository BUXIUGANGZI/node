/**
 * Created by Administrator on 2016/2/16.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var server=http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){


        //var out=fs.createWriteStream('./request.log');
        //out.write('客户端请求方式为'+req.method+'/r/n');
        //out.write('客户端请求url为'+req.url+'/r/n');
        //out.write('客户端请求头对象为'+JSON.stringify(req.headers)+'/r/n');
        //out.end('客户端请求HTTP版本'+req.httpVersion+'/r/n')

    }
    res.end()

}).listen(8080,'localhost');
server.on('listening',function(){

})