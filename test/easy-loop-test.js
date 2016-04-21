//var fs = require('fs');
var loop = require('../lib/easy-loop');

/*
var arr = [1,2,3,4,5];
console.log("Case1 Start => Array and 3 arguments");
console.log("Start : Now Second : ", new Date().getSeconds());
loop(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value, " , Date : ", new Date().getSeconds());
		next();	//require	
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 1 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case1 End => Array");
*/

/*
console.log("Case2 Start => Array and 2 arguments");
loop.for(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value);	
		next();	//require	
	}, 1000);
});
console.log("Case2 End");



console.log("Case3 Start => Array and error(or break) and 3 arguments");
loop.while(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value);
		if(i === 2)	next("error or break");
		else		next();
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 3 result");
});
console.log("Case3 End");



var obj = {a:1,b:2,c:3,d:4,e:5};
console.log("Case4 Start => Object and 3 arguments");
loop.loop(obj, function(key, value, next){
	setTimeout(function(){
		console.log(key, "=>", value);
		next();
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 4 result");
});
console.log("Case4 End");






var arr = [];
console.log("Case5 Start => Empty Array and 3 arguments");
loop(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value);
		next();
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case5 result");
});
console.log("Case5 End");



*/


var arr = [];
for(var i=0; i<10000; i++) arr.push(i);
console.log("Case6 Start => concurrency and 4 arguments");
console.log("Start : Now Second : ", new Date().getSeconds());
loop(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value, " , Date : ", new Date().getSeconds());
		next();
	}, 100);
}, 10000, function(err){
	console.log("err : ", err);
	console.log("Case 6 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case6 End");

