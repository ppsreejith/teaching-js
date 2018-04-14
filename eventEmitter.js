var emitter = (function(){
  //Abstraction of event Emitting and calling:

  //When i create an event emittor, using the on funtion, i'm adding a function with that name in an object inside an array.

  //When i raise an event, im creating a variable that holds: {data:"", obj1}
  var _obj = {};

  function on(event, fn){
    if (!(event in _obj)) {
      _obj[event] = [];
    }
    _obj[event].push(fn);
  }

  function emit(event, data){
    if (event in _obj) {
      var fns = _obj[event];
      for(var index in fns) {
        var fn = fns[index];
        fn(data);
      }
    }
  }

  return { on, emit };

  
})()

var lolListener = function(e) {
  console.log('got lol', e);
};

emitter.on('lol', lolListener);

emitter.on('lol2', lolListener);

emitter.emit('lol3', 5);
emitter.emit('lol2', 4);

emitter.on('lol', lolListener);

emitter.emit('lol', 8);
