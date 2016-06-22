

# easy-loop
	* 쉬운 동기식 반복처리
	* 선택적 병렬처리

## Comment
	1) Method
		: 모두 같은 동작이며 편리한 메소드를 호출하세요.
		
		var loop = require('easy-loop');
		loop(arg, arg [, arg, arg]) == loop.for()
		loop.while(arg, arg [, arg])
		
	2) Arguments	
		(1) Array or Object or function	- require
		(2) process function 	- require
		(3) concurrency	number 	- option (default : 1)
		(4) callback function 	- option (default : nothing)
	
## Examples

	var loop = require('easy-loop');
	
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
	
	/* 결과(Result) - 5초 소요(run time : 5 second)
	Case1 Start => Array and 3 arguments
	Start : Now Second :  54
	Case1 End => Array
	0 '=>' 1 ' , Date : ' 55
	1 '=>' 2 ' , Date : ' 56
	2 '=>' 3 ' , Date : ' 57
	3 '=>' 4 ' , Date : ' 58
	4 '=>' 5 ' , Date : ' 59
	err :  undefined
	Case 1 result
	Result : Now Second :  59
	*/
	
	
	
	
	var arr = [1,2,3,4,5];
	console.log("Case2 Start => Array and 2 arguments");
	loop.for(arr, function(i, value, next){
		setTimeout(function(){
			console.log(i, "=>", value);	
			next();		
		}, 1000);
	});
	console.log("Case2 End => Array and 2 arguments");
	
	/* 결과(Result) - 5초 소요(run time : 5 second)
	Case2 Start => Array and 2 arguments
	Case2 End => Array and 2 arguments
	0 '=>' 1
	1 '=>' 2
	2 '=>' 3
	3 '=>' 4
	4 '=>' 5
	*/
	
	
	
	
	var arr = [1,2,3,4,5];
	console.log("Case3 Start => Array and error(or break) and 3 arguments");
	loop(arr, function(i, value, next){
		setTimeout(function(){
			console.log(i, "=>", value);
			if(i === 2)	next("error or break");
			else		next();
		}, 1000);
	}, function(err){
		console.log("err : ", err);
		console.log("Case 3 result");
	});
	console.log("Case3 End => Array and error(or break)");
	
	/* 결과(Result) - 3초 소요(run time : 3 second)
	Case3 Start => Array and error(or break) and 3 arguments
	Case3 End => Array and error(or break)
	0 '=>' 1
	1 '=>' 2
	2 '=>' 3
	err :  error or break
	Case 3 result
	*/
	
	
	
	
	var obj = {a:1,b:2,c:3,d:4,e:5};
	console.log("Case4 Start => Object and 3 arguments");
	loop(obj, function(key, value, next){
		setTimeout(function(){
			console.log(key, "=>", value);
			next();
		}, 1000);
	}, function(err){
		console.log("err : ", err);
		console.log("Case 4 result");
	});
	console.log("Case4 End => Object");
	
	/* 결과(Result) - 5초 소요(run time : 5 second)
	Case4 Start => Object and 3 arguments
	Case4 End => Object
	a => 1
	b => 2
	c => 3
	d => 4
	e => 5
	err :  undefined
	Case 4 result
	*/
	
	
	
	
	
	var arr = [];	// or {}
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
	console.log("Case5 End => Empty Array");
	
	/* 결과(Result) - 0초 소요(run time : 0 second)
	Case5 Start => Empty Array and 3 arguments
	err :  undefined
	Case5 result
	Case5 End => Empty Array
	*/
	
	
	
	
	
	var arr = [1,2,3,4,5];
	console.log("Case6 Start => concurrency and 4 arguments");
	console.log("Start : Now Second : ", new Date().getSeconds());
	loop(arr, function(i, value, next){
		setTimeout(function(){
			console.log(i, "=>", value, " , Date : ", new Date().getSeconds());
			next();
		}, 1000);
	}, 3, function(err){
		console.log("err : ", err);
		console.log("Case 6 result");
		console.log("Result : Now Second : ", new Date().getSeconds());
	});
	console.log("Case6 End => concurrency");
	
	/* 결과(Result) - 2초 소요(run time : 2 second)
	Case6 Start => concurrency and 4 arguments
	Start : Now Second :  3
	Case6 End => concurrency
	0 '=>' 1 ' , Date : ' 4
	1 '=>' 2 ' , Date : ' 4
	2 '=>' 3 ' , Date : ' 4
	3 '=>' 4 ' , Date : ' 5
	4 '=>' 5 ' , Date : ' 5
	err :  undefined
	Case 6 result
	Result : Now Second :  5
	*/
	
	
	
	
	
	
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
	
	/*
	결과(Result) - 5초 소요(run time : 5 second)
	Case7 Start => while and 3 arguments
	Start : Now Second :  20
	Case7 End
	Date :  21
	Date :  22
	Date :  23
	Date :  24
	Date :  25
	err :  undefined
	Case 7 result
	Result : Now Second :  25
	*/
	
	
	
	
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
	
	/*
	Case8 Start => while and 3 arguments and break(or error)
	Start : Now Second :  21
	Case8 End
	Date :  22
	err :  true
	Case 8 result
	Result : Now Second :  22
	*/