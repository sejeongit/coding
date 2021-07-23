// js_018_banner_04.js
(function($){
// jQuery

// 1. [v] 인디케이터 클릭시 배너이동
// 2. [v] 다음/이전버튼 클릭시 배너이동
// 3. [v] 배너 바뀌면 숫자 변하게
// 4. [v] ul/li 개수/위치 조정
// 5. [v] 일정시간 지나면 자동으로 이동 -> setInterval
// 6. [v] 마우스 올리면 자동으로 이동하는 기능이 일시정지 -> clearInterval
// 7. [v] 마우스 벗어나면 다시 자동으로 이동 -> setInterval
// 8. [v] 인디케이터 선택된 형태 체크 (addClass -> act)
// ------------------------------------------------
// 9. 광고내용 개수에 맞게 인디케이터 생성
// 10. 필요에 따라 인디케이터/버튼/전체개수 및 현재개수 표현여부를 체크
// 11. 재생버튼, 일시정지 버튼 또는 표시
// --------------------------------------------------------------------


// 변수
var banner = $('.banner_01');

var indicator = banner.find('.indicator');
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
var viewLi = viewUl.find('li');

var n = 0; // 변수 바깥에서 먼저 선언
var permission = true;
var viewLiLen = viewLi.length;

// 동작 전 형태변경
var cloneLi = viewLi.eq(-1).clone();
viewUl.prepend(cloneLi);
var newViewLi = viewUl.find('li');
var newViewLiLen = viewUl.find('li').length;
viewUl.css({'position':'relative', 'left': -100+'%', 'width': 100* newViewLiLen + '%'});
newViewLi.css({'width': 100 / newViewLiLen + '%'});

// 함수
var numberCheckFn = function(n){ // 매개변수 n 안써도 되지만 쓰는게 좋음.
  totalNumber.text(viewLiLen);
  nowNumber.text(n+1); // 처음은 0이기에 1 더할 것
};

var indiLiClassSetFn = function(n){
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
  numberCheckFn(n); // indiLiClassSetFn은 모든 동작에 들어가니 같이 묶어줌. 이 함수를 넣어주려면 이보다 먼저 써줘야함.
};


// 함수 우선 수행
numberCheckFn(n);


// 100. 인디케이터 클릭시 배너 이동


// 이벤트
// 101. 인디케이터 클릭
indiLiLink.on('click', function(e){
  e.preventDefault();
  // 순서파악
  n = $(this).parent().index();
  // 배너이동
  viewUl.animate({marginLeft: -100 * n + '%'});
  // .act 적용
  indiLiClassSetFn(n);
});


// 200. 다음버튼 / 이전버튼 클릭시 배너 이동
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    n += 1;
      if(n > viewLiLen-1 ){ // if문 위치 유의!! if문 처음에 씀
        n = 0;
        viewUl.stop().animate({marginLeft: 100+ '%'}); // 처음으로 
      }
    viewUl.stop().animate({marginLeft: -100 * n + '%'}, function(){  // stop()은 여러번 눌렀을때 생기는 현상 어느정도 해결
        indiLiClassSetFn(n);  
        permission = true;
    });
  }
});


prevBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    n -= 1;
    viewUl.stop().animate({marginLeft: -100 * n + '%'}, function(){
      if(n < 0){ // if문 마지막에 씀
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
    nextBtn.trigger('click'); // 2초마다 nextBtn을 클릭해라!
  }, timed*2 );
};
slideGoFn();

banner.on('mouseenter', function(){
  clearInterval(moveSlide); // moveSlide를 멈춰라
});
banner.on('mouseleave', function(){
  slideGoFn();
  // 만약 slideGoFn(); 대신 moveSlide;를 입력하면 위에 clearInterval이 setInterval~부터 모든 기능을 삭제시키기 때문에
  // 함수(function(){})안에 함수(setInterval)를 담아 밖에선 모르게 setInterval기능을 재할당하여 다시 기능하게 만든다.
})



})(jQuery);