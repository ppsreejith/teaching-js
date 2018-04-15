var Promise = function(callback) {
  var thens = [];
  var catches = [];
  var then = function (fn) {
    thens.push(fn);
  };
  var catch = function (fn) {
    catches.push(fn);
  };
  var resolve = function(response) {
    thens.forEach(function(fn) {
      fn(null, response);
    });
  }
  var reject = function(err) {
    thens.forEach(function(fn) {
      fn(err);
    });
  }
  callback(resolve, reject);
  return {
    then,
    catch
  };
}
