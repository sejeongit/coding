"use strict";

// use.js
var arr = ['apple', 'banana', 'grape', 'kiwi']; // const listFn = function (data){ return data + ' is good!!' };
// const listFn = (data) => { return data + ' is good!!'}; // function 대신 화살표함수 =>
// const listFn = (data) => { return `${data} + ' is good!!'`}; // {}, return 안써도 return됨. / ${변수}

var listFn = function listFn(data) {
  return "".concat(data, " + ' is good!!'");
};

for (var i = 0; i < arr.length; i += 1) {
  listFn(arr[i]);
}