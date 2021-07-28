// practice_js_banner_fadeout.js
(function($){
// jQuery

// 1. 인디케이터 클릭시 배너이동
// 2. 다음/이전 버튼 클릭시 배너이동
// 3. 배너 바뀌면 숫자 변하게
// 4. ul/li 개수/위치 조정
// 5. 일정시간 지나면 자동으로 이동 -> setInterval
// 6. 마우스 올리면 자동으로 이동하는 기능이 일시정지 -> clearInterval
// 7. 마우스 벗어나면 다시 자동으로 이동 -> setInterval
// 8. 인디케이터 선택된 형태 체크 ( addClass -> act)
// 9. + 재생, 일시정지 버튼


// 변수
var banner = $('.banner');

var indicator = banner.find('indicator');
var indiLi = indicator.find('li');
var indiLiLink = indiLi.find('a');

var indiP = indicator.find('p');
var totalNumber = indiP.find('.total');
var nowNumber = indiP.find('.now');

var buttonSelect = banner.find('.button_select');
var nextBtn = buttonSelect.find('.next');
var prevBtn = buttonSelect.find('.prev');

var viewArea = banner.find('.view_area');
var viewUl = viewArea.find('ul');
var viewLi = viewArea.find('li');

var n = 0;
var permission = true;
var viewLiLen = viewLi.length;


// 동작 전 형태변경
viewUl.css({'position':'relative'});
viewLi.css({'position':'absolute', 'top': 0,'left':0});

// 함수
var numberCheckFn = function(n){
  totalNumber.text(newViewLiLen);
  nowNumber.text(n+1);
};

var indiLiClassSetFn = function(n){
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
  numberChcekFn(n);
}

// 함수 우선 수행
numberCheckFn(n);


// 1. 인디케이터 클릭시 배너이동

// 이벤트
// 101.인디케이터 클릭
indiLiLink.on('click', function(e){
  e.preventDefault();
  // 순서파악
  n = $(this).parent().index();
  // 배너이동
  viewLi.eq(n).fadeOut();
  viewLi.eq(n+1).fadeIn();
  // .act 적용
  indiLiClassSetFn(n);
});

// 2. 다음/이전 버튼 클릭시 배너 이동
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    n += 1;
    if(n > viewLiLen - 1){
      n = 0;
      viewLi.eq(3).stop().fadeOut();
      viewLi.eq(0).stop().fadeIn();
    }
    viewLi.eq(n).stop().fadeIn();
    viewLi.eq(n+1).fadeIn();
      indiLiClassSetFn(n);
      permission = true;
  }
});

prevBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    n -= 1;
    viewUl.stop().animate({marginLeft: -100 * n + '%'}, function(){
      if(n < 0){
        n = viewLiLen -1;
        viewUl.stop().animate({marginLeft: -100 * n + '%'});
      }
      indiLiClassSetFn(n);
      permission = true;
    });
  }
});

// 일정 타임 이동처리
var timed = 1000;

var moveSlide;
var slideGoFn = function(){
  moveSlide = setInterval(function(){
    nextBtn.trigger('click');
  }, timed*2 );
};
slideGoFn();

banner.on('mouseenter', function(){
  clearInterval(moveSlide);
});
banner.on('mouseleave', function(){
  slideGoFn();
});


})(jQuery);