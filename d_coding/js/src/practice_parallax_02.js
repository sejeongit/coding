// practice_parallax_02.js
(function($){
// jQuery

// 변수
var win = $(window);
var winH = win.outerHeight();
var part = $('.part_02');
var partLi = part.find('li');


// 함수
var setScrollFn = function(liOffset) {
  var scrollGage = win.scrollTop();
  var moveCheck = scrollGage - liOffset + winH;

  var movePercent = parseInt(moveCheck / winH * 100);
  if( movePercent < 0 ){
    movePercent = 0;
  }else if(movePercent > 100 ){
    movePercent = 100;
  }
  return movePercent;
};

var setLiFn = function(){

// partLi의 각각 순서에 맞는 곳에 적용
// li의 개수 파악, 그 개수만큼 반복

var st, liEq, liH, liLocation, liImg;
var i = 0;
var liLen = partLi.length;

for( ; i < liLen ; i += 1 ){
  liEq = partLi.eq(i);
  liImg = liEq.find('.img_box');
  liH = liEq.outerHeight();
  liLocation = liEq.offset().top + liH;
  st = 100 - setScrollFn(liLocation);
  liImg.eq(0).css({backgroundPositionY:st+'%'});
}

}

// 이벤트 
setLiFn();
win.on('scroll', function(){setLiFn(); });


})(jQuery);