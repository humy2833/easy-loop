/**
 * sync easy loop
 */
var easyWhile = require('./easy-while');
var easyFor = require('./easy-for');

function loop(obj, func, concurrency, last){
	if(typeof obj === 'function')
	{
		if(typeof concurrency === 'function') last = concurrency;
		easyWhile(obj, func, last);
	}
	else
	{
		easyFor(obj, func, concurrency, last);
	}
}
loop["for"] = loop["while"] = loop["loop"] = loop["forEach"] = loop;

module.exports = loop;