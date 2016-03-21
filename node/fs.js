/**
 * Created by Administrator on 2016/2/1.
 */

var fs=require('fs');
var file=fs.createReadStream('./message.txt',{start:0,end:20,encoding:'utf8'});
var out=fs.createWriteStream('./out.txt')
file.on('open',function(fd){
    console.log('开始读取数据')
});
file.on('data',function(data){
    out.write(data)
    console.log('获取到的数据为'+data)
})
out.on('open',function(fd){
    console.log('写入的数据被打开')
});
out.on('end',function(fd){
   out.end('再见')
});
file.on('end',function(){
    console.log('文件已全部读取完')
})
file.on('close',function(){
    console.log('文件被关闭')
})
file.on('error',function(){
    console.log('文件读取失败')
})
