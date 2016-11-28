function easyWhile(condition, func, last){
	if(func === undefined && last === undefined)
	{
		func = condition;
		condition = function(){return true;}
	}
	else if(condition === true)
	{
		condition = function(){return true;}
	}
	var run = function(){
		if(condition())	func(next);
		else
		{
			if(last) last();
		}
	};
	var next = function(err){
		if(err)
		{
			if(last) last(err);
		}
		else	run();
	};
	run();
}
module.exports = easyWhile;