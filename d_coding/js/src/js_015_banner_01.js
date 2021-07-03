// js_015_banner_01.js
(function($){
// jQuery

// 해야할 일을 작성
// 1. 다음버튼을 클릭하면
// 2. list_01 -> list_02로 나타나게 - ul을 움직여서 처리
// 2-1 조건 -> .product의 가로값만큼 이동할것 
//     - 가로값 파악하는것? padding X, border X, 순수한 가로값 = width()
// 3. 클릭마다 가로값 크기만큼 이동 -> 2번기능 강화 -> 1씩 값이 커지게(-옵션)
// 4. 마지막 요소가 보이면 멈춤/처음
// 4-1. 보여주는 리스트의 개수 파악

var banner_01 = $('.banner_01');
var ban_01_btn = banner_01.children('.btn');
var b01Next = ban_01_btn.children('button');
var b01Product = banner_01.children('.product');
var b01Ul = b01Product.children('ul');
var b01Li = b01Ul.children('li');

// 4-1
var b01LiLen = b01Li.length;

// 2-1
var pWidth = b01Product.width();
// console.log(pWidth);

var countUp = 0;
// 변수가 함수 안에 있으면 countUp은 클릭마다 누적되지 않고 계속 0으로 돌아오기 때문에
// 계속 클릭해도 한번밖에 이동하지 않는다. 그래서 변수를 위로 빼서 지정해준다.

// 1. --------------------------------
b01Next.on('click', function(e){
  // 클릭한 요소가 기본 이벤트가 있으므로 이를 무효처리
  e.preventDefault();

  // 3.----------------------------------
  countUp += 1;
  // 4.-------------------------
    if( countUp >= b01LiLen){
      countUp = b01LiLen - 1; // 멈춤 - 최대 클릭수는 6번이기 때문에 li개수 -1
      countUp = 0; // 처음으로
    }
    
  // 2. ---------------------------------
  var mvWidth = -(pWidth * countUp) + 'px';
  b01Ul.css({marginLeft : mvWidth}); // 2번기능 테스트
  console.log( countUp );
  // 왼쪽으로 가므로 가로값에 마이너스가 붙음
  // 기준은 그대로이므로(.product) 가로값이 100이라면 -100, -200 이런식으로 클릭마다 줄어들게 해
  // 더 많은 가로값을 margin-left로 보내 다음 list를 보여줌

});


// practice ------------------------------------------

// var banner_02 = $('.banner_02');
// var ban_02_btn = banner_02.children('.btn');
// var b02Next = ban_02_btn.children('button').eq(0);
// var b02Prev = ban_02_btn.children('button').eq(1);
// var b02Product = banner_02.children('.product');
// var b02Ul = b02Product.children('ul');
// var b02Li = b02Ul.children('li');

// var b02LiLen = b02Li.length;

// var pWidth02 = b02Product.width();

// var countUp02 = 0;

// b02Next.on('click', function(e){
//   e.preventDefault();

//   countUp02 += 1;

//     if(countUp02 >= b02LiLen){
//       countUp02 = b02LiLen -1;
//       countUp02 = 6;
//     }

//   var mvWidthNext02 = -(pWidth02 * countUp02) + 'px';
//   b02Ul.css({marginLeft : mvWidthNext02});
//   console.log(countUp02);
// });

// var countUp02 = -7;

// b02Prev.on('click', function(e){
//   e.preventDefault();

//   countUp02 += 1

//   if(countUp02 >= 0){
//     countUp02 = b02LiLen -1;
//     countUp02 = 0; 
//   }

//   var mvWidthPrev02 = (pWidth02 * countUp02) + 'px';
//   b02Ul.css({marginLeft : mvWidthPrev02});
//   console.log(countUp02);


// });





})(jQuery);