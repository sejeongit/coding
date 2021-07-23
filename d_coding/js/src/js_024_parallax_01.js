// js_024_parallax_01.js
(function($){
// jQuery

/*
1. event - scroll -> 스크롤된 값을 파악(scrollTop())
2. 화면의 영역을 0~100%로 구분하는 방법
3. background-position: 0~100%
4. 화면의 하단(시작부분) 상단에 있는 영역(끝부분)
*/

// 변수
var win = $(window);
var winH = win.outerHeight();
var part = $('.part');
var partLi = part.find('li');

// 201. partLi의 첫번째 ( eq(0) )의 시작위치가(브라우저 화면의 아래부분에서 나타나는 시점) 0에서부터 시작
// 스크롤값에서 partLi.eq(0)의 offset().top 만큼 빼면 나타나는 시점이 0부터 시작하지 않을까
// 화면상에서 위의 시점이 아닌 아래의 시점이기에 브라우저의 높이값만큼은 추가로 더해야 한다~!!!!!!!!!!!!!
// 스크롤값 -> 선택지점의 offset().top + 화면의 높이
// %의 공식 : 수치 / 기준 * 100 -> vw공식과 같으며,
// (이동하는 수치) / 브라우저의 높이 * 100 
// 기준치가 li의 시작점이 아닌 중간지점으로 교체
// 실제 이동하는 이미지의 background-position-y의 값이 반영


// 함수
var setScrollFn = function(liOffset){
  var scrollGage = win.scrollTop();
  // console.log( scrollGage - liOffset + winH );
  var moveCheck = scrollGage - liOffset + winH;
  // 브라우저 스크롤한 만큼 높이 - li가 브라우저 상단에서 떨어진 만큼 높이 + 브라우저 높이 

  var movePercent = parseInt(moveCheck / winH * 100);
  // 퍼센트 값 0에서 100사이로 만들기 - 안만들어줘도 기능은 하지만 0보다 작거나 100을 넘으면 사진이 온전히 꽉 차지 못하고 빈공간이 생김
  if( movePercent < 0 ){ 
    movePercent = 0;
  }else if(movePercent > 100){
    movePercent = 100;
  }
  return movePercent;
};

var setLiFn = function(){

// partLi의 각각의 순서에 맞는 곳에 적용
// li의 개수 파악, 그 개수만큼 반복

  var st, liEq, liH, liLocation, liImg;
  var i = 0;
  var liLen = partLi.length;
  for(; i < liLen; i+=1 ){
    liEq        = partLi.eq(i);
    liImg       = liEq.find('.img_box');
    liH         = liEq.outerHeight() / 2; // li의 중간을 기준점으로 할때 2로 나눔
    liLocation  = liEq.offset().top + liH;
    st          = 100 - setScrollFn(liLocation); // 적은 값을 움직여 자연스럽게 움직여보이게 하기 위해 뺌
    liImg.eq(0).css({backgroundPositionY:st+'%'});
  }

}// setLiFn();


// 이벤트
setLiFn();
win.on('scroll', function(){ setLiFn(); });


})(jQuery);