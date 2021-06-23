// js/src/js_009_loop_02.js

// 중복으로 처리되는 반복문
var i = 0;
for( ; i < 10 ; i += 1 ){
  console.log( 'i: ', i );
  if(i === 5){
    console.log('find it!!!');
    break;
  }
}
var line = function(){
  console.log(' -------------------------------- ');
}
 line();

i = 0;
for( ; i < 10; i += 1 ){
  console.log('i-', i);

  var j = 0;
  for( ; j <= i; j += 1){
    console.log( 'j: ', j );
  }
}
line();

var a = 1;
var b, rel;
for( ; a < 10; a++ ){
  console.log(a + '단');
  b = 1;
  for( ; b < 10; b++ ){
    // console.log(b);
    rel = a + ' * ' + b + ' = ' + (a*b);
    console.log( rel );
  }
}

line();

// for-in : for(임의변수 in 객체이름){}
// 배열을 for-in문에 사용하는 것은 성능에 매우 영향을 미치므로 사용 X
// for (i in fruits) { console.log(i); }
// for-in은 배열용이 아니라 {객체}용

var coffee = {
  base : '에스프레소',
  pop : '아메리카노',
  soft : '카페라떼',
  sweet : '캬라멜 마끼야또'
};
coffee.etc = '믹스커피';
// console.log(coffee);
/*
var i;
for(i in coffee){
  console.log( coffee[i] );
}
console.log( i );
*/
// for in test
var testList = document.getElementsByClassName('test_list')[0];
testList.style.padding = '10px';
testList.style.backgroundColor = '#dfdfdf';

var makeList = function(className, content){
  var makeLi = document.createElement('li');
  makeLi.append(content);
  makeLi.setAttribute('class', className);
  testList.appendChild(makeLi); 
}

var i, j, k;
for(i in coffee){
  j = coffee[i];
  k = i;
  makeList(k, j);
}


// ---------------------------------
// forEach
// 배열.forEach( function(배열의각값, 각값의순서){ } );
var fruits = [
  '바나나', '포도', '오렌지', '자두', '키위'
];

var t = 0;
var fLen = fruits.length;
console.log( fLen );
for(;t < fLen; t++ ){
  console.log( fruits[t] );
}

fruits.forEach(
  function(data, index){
    console.log( (index + 1), data );
  }
);


// DOM - (document object model) - 선택자
// id :   document.getElementById('아이디이름');
// class : document.getElementsByClassName('클래스이름')[순번];
// class : document.getAttribute('class', '클래스이름')[순번];
// tag : document.getElementsByTagName('태그이름');
// attribute : document.getAttribute('속성명', '속성값');
// MultiAllInOne : document.querySelectorAll('css형태의 선택자')[순번];

// makeElement : document.createElement('요소이름');
// makeAttribute : 선택자.setAttribute('속성명', '값');
// insert text 1(내부요소 삭제 후 삽입) : 선택자.innerText = '내용';
// insert text 2(내부요소의 뒤에 추가) : 선택자.append(내용);
// insert html 1(내부요소 삭제 후 삽입) : 선택자.innerHTML = '코드';
// insert html 2(내부요소의 뒤에 추가) : 선택자.appendChild('코드');

