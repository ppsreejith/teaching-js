const stack = (function() {
  let head = null;

  function push(data) {
    head = {
      next: head,
      data: data
    };
  }

  function pop() {
    const temp = head;
    if (head && head.next) {
      head = head.next;
    }
    return temp;
  }

  function print() {
    let temp = head;
    const buffer = [];
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

module.exports = { stack };
