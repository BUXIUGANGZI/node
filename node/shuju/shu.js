/**
 * Created by Administrator on 2016/3/2.
 */
//var mongo=require('mongodb');
//
//var host="localhost";
//var port='3306';
//var server=new mongo.Server(host,port,{});
//var db=new mongo.Db('node-mongo-examples',server,{safe:true});
    var mysql=require('mysql');
var connection=mysql.createConnection({host:"127.0.0.1",port:3306,database:'test',user:'root',password:''});

function handleDisconnect(){
    connection.connect(function(err){
        if(err){
            console.log(err);
            console.log('数据库连接错误')
        }else{
            console.log('数据库已经连接');
            connection.query('SELECT * FROM ??',['admin'],function(err,result){
                            if(err){
                                console.log(err);
                                console.log('查询数据失败')
                            }else{
                                console.log(result);
                                connection.end()
                            }
                        })
            //connection.query('CREATE tables mytable', function(err) {
            //    if(err){
            //        console.log(err)
            //    }
            //
            //});

            connection.query('INSERT INTO admin SET name=?,password=? ',['gang',999],function(err,result){
                if(err){
                    console.log(err)
                }else{

                }
            })







            //connection.end(function(err){
            //    if(err){
            //        console.log('数据库关闭错误')
            //    }else{
            //        console.log('数据库已经关闭')
            //    }
            //})
        }

    });
    connection.on('error',function(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.log('数据库连接丢失')
            setTimeout(function(){
                handleDisconnect();
            },10000)

        }

    })
}
handleDisconnect();
