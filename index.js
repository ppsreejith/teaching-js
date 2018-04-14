setTimeout(function() {
  console.log('print first');
  setTimeout(function() {
    console.log('print second');
    setTimeout(function() {
      console.log('print third');
    }, 1000);
  }, 1000);
}, 1000);

var _printer = {};

function getPrinterStatus(ip, callback) {
  var timeout = setInterval(function() {
    if (_printer[ip] === true) {
      clearTimeout(timeout);
      return callback();
    }
  }, 1000);
}

var ip = '192.168.0.5';

getPrinterStatus(ip, function() {
  console.log('Yay!, printer started!');
});


setTimeout(function() {
  _printer[ip] = true;
}, 5000);
