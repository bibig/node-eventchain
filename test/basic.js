var Eventchain = require('../index');
var ec = Eventchain.create('basic test');

ec.add(function (string, next) {
  var id = 1;
  setTimeout(function () {
    console.log('%s on #%d', string, id);
    next();
  }, 1000);
});

ec.add(function (string, next) {
  var id = 2;
  setTimeout(function () {
    console.log('%s on #%d', string, id);
    next();
  }, 1000);
});

ec.add(function (string, next) {
  var id = 3;
  setTimeout(function () {
    console.log('%s on #%d', string, id);
    next();
  }, 1000);
});

ec.add(function (string, next) {
  var id = 4;
  setTimeout(function () {
    console.log('%s on #%d', string, id);
    next();
  }, 1000);
});

/*
ec.add(function (string, next) {
  var id = 3;
  setTimeout(function () {
    next(new Error('im tired!'));
  }, 1000);
});
*/

ec.emit('hello world', function (e) {
  if (e) { throw e;}
  // console.log('all done!');
  console.log('new round will begin!');
  ec.emit('hello eventchain', function (e) {
    if (e) { throw e;}
    console.log('all done!');
  });
});

