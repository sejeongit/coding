// calc.js

function add (i, j) {
  var k = i + j;
  return k;
};

function multi (i, j) {
  var k = i * j;
  return k;
};

function l(){
  return 10;
} 

function divide (j) {
  var k = l() / j;
  return k;
}

module.exports =  { // export : 내보내기
  'add' : add,
  'multi' : multi,
  'divide' : divide
}; // 외부에서 확인할 수 있는 건 이 세개 뿐임! 