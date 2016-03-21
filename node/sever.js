/**
 * Created by Administrator on 2016/1/28.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(request,response){
    var urlObj=url.parse(request.url);
    var pathname=urlObj.pathname;
    var query=urlObj.query;
    if(pathname==='/'){
        readfileandresponse('/index.html',response)
    }else if(pathname==='/ajax'){
        response.end('{"msg":"this is a ajax"}')
    }else{
        readfileandresponse(pathname,response)
    }

}).listen(8080);
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