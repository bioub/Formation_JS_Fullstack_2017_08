
const logClosure = function(msg) {
  // Portée de closure
  return function() {
    console.log(msg);
  };
};


const hello = logClosure('Hello');
hello(); // Hello






for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

for (var i=0; i<3; i++) {
  setTimeout(logClosure(i), 1000);
}
