// js/src/js_005_operator2.js

// 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)

var n = 10;
var n2 = 20;
var result = n > n2;
console.log( result );

result = n < n2;
console.log( result );

result = n <= n2;
console.log( result );

// 삼항연산자
// (조건) ? 조건의 참 : 조건의 거짓;
var k;
( result ) ? k = 'good' : k = 'sad' ;
console.log( k );


// 비교연산자
// &&, ||
// & : and -> 좌/우를 비교해서 모두 참인지 여부
// | : or -> 좌/우를 비교해서 둘 중 하나라도 참인지 여부 파악
var l;
// ( false & true ) ? l='good' l='bad' ;
( false && true ) ? l='good' : l='bad' ;
console.log( l );
( true || false ) ? l='good' : l='bad' ;
console.log( l );
// 구현의 속도를 높이기 위해,
// &&는 거짓의 상태가 먼저 오는 것을,
// || 참의 상태가 먼저 오는 것을
// 코드가 짧은 것/가독성이 좋은 것을 먼저 작성

// ==, ===
var a = 10;
var b = '10';
// var equal = a == b;
var equal = a == b;
// console.log( equal );
// console.log( a + 10 );
// console.log( b + 10 );

// equal이 참? 참이면 같아요 라고 알려줘 : 거짓이면 달라요 라고 알려줘;
var r;
( equal ) ? r = "같아요!" : r = "달라요" ;
console.log( r );

var date = new Date();
var h = date.getHours();
console.log(h);
(h < 12) ? console.log('지금은 오전입니다.') : console.log('오후입니다.');


var t = !true;
console.log( t );

console.log( !(true && !false) );
console.log( '????: ', !!0 );

// !=, !==
(10 !== '10') ? t='맞아요!' : t="아니에요";
console.log( t );
