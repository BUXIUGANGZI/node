/**
 * Created by Administrator on 2016/2/17.
 */
var  ary=[2,5,6,8,9,4,7,8,3,2];
ary.forEach(function(item,index,array){
    array[item]+=1
})
console.log(ary)