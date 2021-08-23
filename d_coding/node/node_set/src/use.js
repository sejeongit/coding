// use.js

const arr = ['apple', 'banana', 'grape', 'kiwi'];

// const listFn = function (data){ return data + ' is good!!' };
// const listFn = (data) => { return data + ' is good!!'}; // function 대신 화살표함수 =>
// const listFn = (data) => { return `${data} + ' is good!!'`}; // {}, return 안써도 return됨. / ${변수}
const listFn = (data) => `${data} + ' is good!!'`;

for(let i=0; i < arr.length; i+=1){
  listFn(arr[i]);
}
