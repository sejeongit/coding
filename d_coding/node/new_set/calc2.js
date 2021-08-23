// calc.js

export function add (i, j) {
  var k = i + j;
  return k;
};

export function multi (i, j) {
  var k = i * j;
  return k;
};

function l(){ return 10; } 
export function divide (j) {
  var k = l() / j;
  return k;
}
