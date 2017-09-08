'use strict';
var loop = require('./easy-for');
function easyTick(arr, ms, concurrency, func, last){
  const MAX = arr.length;
  const TOTAL_PAGE = Math.ceil(MAX / concurrency);
  var page = 1;
  var successCount = 0;
  var stop = null;
  var isEnd = false;
  loop(TOTAL_PAGE, function(i, next){
    let startIndex = (page - 1) * concurrency;
    let endIndex = page * concurrency;
    if(endIndex > MAX) endIndex = MAX;
    for(let i=startIndex; i<endIndex; i++)
    {
      func(i, arr[i], function(e){
        successCount++;
        if(e) stop = e;
        runLast();
      });
    }
    page++;
    setTimeout(function(){
      if(stop) runLast();
      else next();
    }, ms);
  });

  function runLast(){
    if(!last || isEnd) return;
    if(MAX <= successCount || stop)
    {
      isEnd = true;
      last(stop);
    }
  }
}

module.exports = easyTick;