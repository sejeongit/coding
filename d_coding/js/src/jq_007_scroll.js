// jq_007_scroll.js
(function($){
// jQuery

  // 1. 스크롤시 이동된다는 확인
  // 2. 스크롤값 작성

// 변수
  var wrap = $('#wrap');  
  var part = $('.part');
  var p_01 = $('.position_01');
  var p_02 = $('.position_02');
  var p_03 = $('.position_03');
 

 // 스크롤의 위치값 확인
 var scrollPositionFn = function(){
  var st = $(window).scrollTop();
  p_01.text( st );
 };
 scrollPositionFn();

// 떨어진 위치값 파악
var offsetTopFn = function(){
  var offTop = part.offset().top; // 지역변수
  p_02.text( offTop );
}
offsetTopFn();

// #wrap의 위치값 파악
var wrapTopFn = function(){
  var offTop = wrap.offset().top; // 지역변수
  p_03.text( offTop );
  // 실상은 position:fixed된 값이 스크롤할 때마다 같은 자리를 유지하기 위해 움직이는 것이고 wrap은 계속 위에 붙어있기에 0임
}


$(window).on('scroll', function(){ // window 말고 'html,body', document 등도 가능
  // on.('scroll')은 스크롤 했을 때
  scrollPositionFn();
  offsetTopFn();
  wrapTopFn(); 
});


// scrollTop() -> 스크롤바의 위치값을 파악
// offset().top -> 위에서부터 떨어져있는 값

})(jQuery);