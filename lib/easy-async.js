var loop = require('./easy-for');

function async(list, concurrency, cb){
  var isArr = list instanceof Array;
  var results = isArr ? [] : {};
  loop(list, concurrency, function(i, value, next){
    value(function(err, val){
      if(err) next(err);
      else
      {
        if(isArr) results.push(val);
        else      results[i] = val === undefined ? null : val;
        next();
      }
    });
  }, function(err){
    if(cb) cb(err, results);
  });
}

module.exports.series = function(list, concurrency, cb){
  var t = typeof concurrency;
  if(t === 'function')
  {
    cb = concurrency;
    concurrency = 1;
  }
  else if(t === 'number' && t <= 0 || t !== 'number' && arguments.length === 3)
  {
    concurrency = 1;
  }
  async(list, concurrency, cb);
};
module.exports.parallel = function(list, cb){
  var isArr = list instanceof Array;
  async(list, isArr ? list.length : Object.keys(list).length, cb);
};