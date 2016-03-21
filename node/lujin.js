/**
 * Created by Administrator on 2016/2/2.
 */
var fs=require('fs');
var path=require('path');
var net=require('net');
var server=net.createServer(function(socket){
    server.getConnections(function(err,count){
        console.log('当前存在的客户端连接',count)
        server.maxConnections=2
        console.log('最多存在的客户端连接',server.maxConnections)
    })

    console.log("客户端与服务器端连接完成")
});
server.listen('8080','localhost',function(){
    var address=server.address();
    console.log("客户端开始监听",address)
})

server.on('error',function(e){
    if(e.code=="EADDRINUSE"){
        console.log('服务器端口地址被占用')
    }
})
server.on('close',function(){
    console.log('服务被关闭')
})






//var mypath=path.normalize('.//lujing//a//b//c//');
//var file=fs.createReadStream(mypath+'text.txt');
//file.on('data',function(data){
//    console.log(data)
//})
