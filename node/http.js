/**
 * Created by Administrator on 2016/2/2.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');
var dns=require('dns');
var data={'num':255,'class':5}
var server=http.createServer(function(request,response){
    var urlObj=url.parse(request.url);
    console.log(urlObj)
    var pathname=urlObj.pathname;
    var query=urlObj.query;
    var obj=querystring.parse(query)
    dns.resolve('www.baidu.com','A',function(err,add){
    })
    if (obj && obj.cb) {
        //console.log(params.query.callback);
        var str =  obj.cb + '(' + JSON.stringify(data) + ')';//jsonp
        response.end(str);
    } else {
        //response.end(JSON.stringify(data));//普通的json
    }
    if(pathname==='/'){
        readfileandresponse('/map.html',response)
    }else if(pathname==='/ajax'){

        response.end('{"msg":"this is a ajax"}')
    }else{
        readfileandresponse(pathname,response)
    }
    //if(req.url!=="/favicon.ico"){
    //    //var out=fs.createWriteStream('./request.log');
    //    //out.write('客户端请求方式为'+req.method+'/r/n');
    //    //out.write('客户端请求url为'+req.url+'/r/n');
    //    //out.write('客户端请求头对象为'+JSON.stringify(req.headers)+'/r/n');
    //    //out.end('客户端请求HTTP版本'+req.httpVersion+'/r/n')
    //
    //    req.on('data',function(data){
    //        console.log(decodeURIComponent(data))
    //        console.log('客户端接受的数据为：'+decodeURIComponent(data))
    //    })
    //    req.on('end',function(){
    //        console.log('客户端请求数据已经接受完毕')
    //    })
    //
    //    readfileandresponse('/map.html',res)
    //}
    //res.end()

}).listen(1337,'127.0.0.1');
server.on('listening',function(){

})
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
