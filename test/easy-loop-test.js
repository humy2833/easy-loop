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






var arr = [];
for(var i=0; i<10000; i++) arr.push(i);
console.log("Case6 Start => concurrency and 4 arguments");
console.log("Start : Now Second : ", new Date().getSeconds());
loop(arr, function(i, value, next){
	setTimeout(function(){
		console.log(i, "=>", value, " , Date : ", new Date().getSeconds());
		next();
	}, 1000);
}, 10000, function(err){
	console.log("err : ", err);
	console.log("Case 6 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case6 End");



var num = 0;
console.log("Case7 Start => while and 3 arguments");
console.log("Start : Now Second : ", new Date().getSeconds());
loop.while(function(){
	return num < 5;
}, function(next){
	setTimeout(function(){
		console.log("Date : ", new Date().getSeconds());
		num++;
		next();
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 7 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case7 End");





var num = 0;
console.log("Case8 Start => while and 3 arguments and break(or error)");
console.log("Start : Now Second : ", new Date().getSeconds());
loop.while(function(){
	return num < 5;
}, function(next){
	setTimeout(function(){
		console.log("Date : ", new Date().getSeconds());
		num++;
		next(num === 1 ? true : false);
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 8 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case8 End");
*/

/*
console.log("Case9 Start => When only know the number of iterations. 2 or 3 arguments possible");
console.log("Start : Now Second : ", new Date().getSeconds());
var loopCount = 5;
loop(loopCount, function(i, next){
	setTimeout(function(){
		console.log(i, "Date : ", new Date().getSeconds());
		next();
	}, 1000);
}, function(err){
	console.log("err : ", err);
	console.log("Case 9 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
console.log("Case9 End");
*/

/*
console.log("Case10 Start => When only know the number of iterations");
console.log("Start : Now Second : ", new Date().getSeconds());
var handle = loop.create(10, function(err){
	console.log("err : ", err);
	console.log("Case 10 result");
	console.log("Result : Now Second : ", new Date().getSeconds());
});
for(var i=0; i<10; i++)
{
	setTimeout(function(){
		console.log("Date : ", new Date().getSeconds());
	  handle.next();
	}, 1000);
}
console.log("Case10 End");
*/