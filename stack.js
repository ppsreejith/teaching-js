var stack = (function() {
  var head = null;

  function push(data) {
    var obj = {
      next: head,
      data: data
    };
    head = obj;
  }

  function pop() {
    var temp = head;
    if (head && head.next) {
      head = head.next;
    }
    return temp;
  }

  function print() {
    var temp = head;
    var buffer = [];
    while(temp && temp.data) {
      buffer.push(temp.data);
      temp = temp.next;
    }
    console.log(buffer.join(' -> '));
  }
  return {
    push: push,
    pop: pop,
    print: print
  }
})();

stack.push(5);
stack.push(2);
stack.push(6);

stack.print();

stack.pop();
stack.push(7);


stack.print();
