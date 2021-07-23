// js_021_scroll.js
(function($){
// jQuery

// 1. #headBox의 위치가 상단에서 얼만큼 떨어졌는지 체크 -> offset().top
// 2. 스크롤시 스크롤값을 체크 -> scrollTop()
// 3. 스크롤의 값이 offset().top의 값보다 커지면 headBox의 위치를 position:fixed
// 4. offset().top의 값은 수시로 확인할 필요 없다.
// ===================================================================
// 5. #sideBox의 위치를 top:#viewBox의 50px 아래 배치
// 6. #sideBox의 위치를 스크롤시 상황에 따라 headBox의 아래에 fixed처리
// 601. headBox의 높이값 + 필요한 headBox에서 떨어져있는 공간(30px)
// -------------------------------------------------------------------
// 선택자.height() -> 내부의 높이 확인
// 선택자.innerHeight() -> 내부의 padding 포함한 높이 확인
// 선택자.outerHeight() -> 내부의 padding + border 포함한 높이 확인
// 선택자.outerHeight(true) -> 내부의 padding + border + margin 포함한 높이 확인 - jQuery에만 있음!
// 선택자.offset().top -> 선택요소의 상단부터 떨어져있는 위치 파악 
// 선택자.scrollTop() -> 스크롤바의 위치가 어디에 배치되어 있는가?(눈에 보이는 스크롤바는 비율)
// 선택자.removeAttr() -> 선택요소의 속성을 삭제

// offset().top -> 선택자 주체
// offsetX, offsetY, pageX, pageY, screenX, screenY, clientX, clientY -> 이벤트 주체
// 둘은 아예 다른 기능임



// 변수 ------------------------------------
var win = $(window); // var 에 window라 써버리면 js의 window라는 기능이랑 겹치므로 쓰지 말기
var headBox = $('#headBox');
var viewBox = $('#viewBox');
var sideBox = $('#sideBox');

// #headBox의 떨어진 위치 체크
var offHeadBox = headBox.offset().top; // 위에서부터 headBox가 위치한 값! headBox 위

// #viewBox의 위치/높이값 체크
var offViewBox = viewBox.offset().top; // only 숫자 값 출력
var viewBoxHeight = viewBox.outerHeight(); // only 숫자 값 출력
var checkViewBoxH = offViewBox + viewBoxHeight; // px로 더함
// viewBox.offset().top은 viewBox의 위 위치값만 잰다. 위에서부터 viewBox가 위치한 값!
// 그렇기에 viewBox보다 아래에 배치하려면 viewBox의 높이값도 파악해서 그 아래로 배치해야하니 viewBox의 높이도 재서 둘을 합친 것이다.
// offset().top, offset().left 두개밖에 존재하지 않음 ( offset().bottom : x )

// sideBox 위치 설정
sideBox.css({'top': checkViewBoxH + 'px'});



// 함수 ==================================
// 스크롤 고정에 따른 함수
var scrollFixFn = function(){
  var st = win.scrollTop();
  if(offHeadBox <= st){
    headBox.css({'position':'fixed'});
  }else{
    // headBox.css({'position':'relative'});
    headBox.removeAttr('style'); // js에서 컨트롤하면 html에서 style속성을 주므로 이걸 없애줌
  }
}
scrollFixFn();

// #headBox의 높이값 체크 함수
var headBoxSetFn = function(){
  var headBoxH = headBox.outerHeight();
  var mySetHeadOffset = headBoxH + 30;
  return mySetHeadOffset;
}

var scrollFix2Fn = function(){
  var st = win.scrollTop();
  // console.log(checkViewBoxH, st);
  // scrollTop()의 값과 이미 설정된 headBox 및 간격설정된 값(headBoxSetFn)으로 체크
  var myScrorllTop = st + headBoxSetFn();

  if(checkViewBoxH < myScrorllTop ){
    // 위치값 고정으로 인하여 기존 top의 값을 변경
    sideBox.css({'position':'fixed', top: headBoxSetFn() });
  }else{
    // fixed를 해제하고 기존 position으로 재설정, 기존의 top의 값으로 변경
    sideBox.css({'position':'absolute', top: checkViewBoxH + 'px'});
  }
};

// 이벤트 ================================

// 스크롤시 움직이는 값 확인
win.on('scroll', function(){
  scrollFixFn();
  scrollFix2Fn();
});


})(jQuery);