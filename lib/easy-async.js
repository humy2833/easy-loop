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

module.exports.series = function(list, cb){
  async(list, 1, cb);
};
module.exports.parallel = function(list, cb){
  var isArr = list instanceof Array;
  async(list, isArr ? list.length : Object.keys(list).length, cb);
};