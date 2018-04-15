var _printer = {};

function getPrinterStatus(ip, callback) {
  var _index = 0;
  var timeout = setInterval(function() {
    _index++;
    if (_index === 5) {
      clearTimeout(timeout);
      return callback('Error');
    }
    if (_printer[ip] === true) {
      clearTimeout(timeout);
      return callback(null, true);
    }
  }, 1000);
}

var ip = '192.168.0.5';

getPrinterStatus(ip, function(err, status) {
  if (err) {
    console.log('Oops, error is', err);
  } else {
    console.log('Yay!, printer started!');
  }
});

setTimeout(function() {
  _printer[ip] = true;
}, 3000);
