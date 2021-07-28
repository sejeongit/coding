// practice_landing.js
(function($){
// jQuery

var win = $(window);
var part = $('.part2');
var li = part.find('li');


// 임시 체크 -------------------------------------------------
// var liOffset = li.eq(0).offset().top;
// var winH = win.outerHeight();
// var liPimg = li.eq(0).find('.position_img');


// 함수 -------------------------------------------------


// 이벤트 -------------------------------------------------
win.on('scroll', function(e){
  var winScroll = win.scrollTop();
  // -----------------------------------------------------
  var liOffset; // li.eq(0).offset().top;
  var winH = win.outerHeight();
  var liPimg; // li.eq(0).find('.position_img');
  var i=0;

  var permission = true;
  
  if(permission){
    permission = false;

  for (; i < li.length; i++){
    liOffset = li.eq(i).offset().top;
    liPimg = li.eq(i).find('.position_img');
    // ----------------------------------------------------- 
    // 선택된 형태가 브라우저 하단에서 0부터 값이 나오도록
    var findScroll = winScroll - liOffset + winH; 
    // %계산법 : 스크롤값 / 기준치 * 100
    var percentScroll = parseInt(findScroll / winH * 100);
    var per;
    if( percentScroll < 0 ){
      per = 0;
    }else if( percentScroll > 100){
      per = 100;
    }else{
      per = percentScroll;
    }// console.log( per/4 );

    // liPimg.stop().animate({marginTop: -per/3 + 'px'}, 300);
    var intN = per / 4;
    liPimg.css({ opacity:'1', transform:'translateY(' + intN + '%)',
                transition: 'all 1000ms ease'} );
  
  } // for  
}
});



})(jQuery);