// test_banner_indicator.js
(function($){
// jQuery

var banner = $('#miniProduct');
var indicator = banner.find('.indicator');
var indiUl = indicator.find('ul');
var indiLi = indiUl.children('li');
var indiLink = indiLi.children('a');

var viewArea = banner.find('.product');
var viewUl = viewArea.find('ul');

var n = 0;

// 이벤트
indiLink.on('click', function(e){
  e.preventDefault();
  var _thisI = $(this).parent().index();
  n = _thisI;

  // 광고 이동
  viewUl.stop().animate({marginLeft: (-100*n) + '%'});
  
  // indiLi.eq(n).addClass('act');
  // indiLi.eq(n).siblings().removeClass('act');
  $(this).addClass('act');
  $(this).parent().siblings().children('a').removeClass('act');
});


})(jQuery);