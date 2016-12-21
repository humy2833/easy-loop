function easyPing(func1, func2, isAllEnd, last){
	var max = func1.length;	
  var isEnd = false;
	var count = {start:0, end:0};	
  var count2 = {start:0, end:0, isPing:false};
  if(typeof isAllEnd === 'function')
  {
    last = isAllEnd;
    isAllEnd = false;
  }
	var next = function(err){
		count.end++;
    if(err)
    {
      if(last) last(err);
    }
    else
    {
      if(typeof func2[count.start-1] === 'function')
      {
        ping();
      }
      if(count.end == max)
      {
        if(!isEnd && last && (!isAllEnd || isAllEnd && count.end == count2.end))
        {
          isEnd = true;
          last();
        }
      }
      else
      { 
        run();
      }
    }
	};
	var run = function(){
		if(max > count.start)
		{
      func1[count.start](next, count.start++);
		}
	};
  var ping = function(){
    if(!count2.isPing)
    {
      if(count.end > count2.start)
      {
        count2.isPing = true;
        func2[count2.start++](function(){
          count2.end++;
          count2.isPing = false;
          ping();
        });
      }
      else if(isAllEnd && last && count2.end == max && count.end == count2.end && !isEnd)
      {
        isEnd = true;
        last();
      }
    }
  };
	max == 0 ? next() : run();
}
module.exports = easyPing;