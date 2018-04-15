var Promise = function(callback) {
  var thens = [];
  var catches = [];
  this.then = function (fn) {
    thens.push(fn);
    return this;
  };
  this.catch = function (fn) {
    catches.push(fn);
    return this;
  };
  var resolve = function(response) {
    thens.forEach(function(fn) {
      fn(response);
    });
  }
  var reject = function(err) {
    catches.forEach(function(fn) {
      fn(err);
    });
  }
  callback(resolve, reject);
  return this;
}

var a = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(5);
  }, 3000);
});

a.then(function(conn) {
  console.log('Promise resolved once to', value);
}).catch(function(err) {
  console.log('Error is', err);
});

a.then(function(value) {
  console.log('Promise resolved second to', value);
}).catch(function(err) {
  console.log('Error is', err);
});
