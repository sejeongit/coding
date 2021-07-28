// jq_006_mouseck_xy.js
(function($){
// jQuery

// client : 브라우저에서 보이는 부분만큼을 왼쪽을 0, 상단을 0로 무조건 본다.
// offset : 이벤트 발생 영역 -> touch 기반에는 offsetX, offsetY 존재하지 않는다.
// page : 문서전체의 크기를 기준으로 본다.
// screen : 모니터 좌표 기준

// hint : pageX, pageY 값에서 무언가 처리!!!
// hint : offset().top, offset().left -> document 상단 끝, document 왼쪽 끝에서부터 떨어진 양
// -> offset() : 메소드, top : 속성
// ------------------------------------------------------------------
var area   = $('.area');
// var area   = $('#wrap');
var chType = $('.check_type');
var chX    = $('.check_x');
var chY    = $('.check_y');


// click은 마우스 눌렀다 띄는 행위 전체, 왼버튼으로 인식되며 button 값은 0

// mousedown - 마우스를 누른 키를 찾아내기
// 이벤트.button
// 0 -> 왼버튼, 1 -> 휠, 2 -> 오른버튼

// mouseup 마우스 누른버튼 띌때
// mousemove 마우스가 움직임을 가질 때,
// 마우스 누른 상태로 움직임을 체크하려면 여러 옵션을 설정해서 사용해야 한다.

// touchstart 터치가능한 기기를 누를 때
// touchend 터치가능한 기기를 띌때
// touchmove 터치 중 손가락을 움직일 때


// 체크 및 좌표 함수 -> 생성자 함수를 통해 필요시 값을
var OffsetFn = function(){
  this.top = Math.round( area.offset().top ); // Math.round : 반올림
  this.left = Math.round( area.offset().left );
  // console.log( 'top: ' + top + 'px' ,' | ','left: ' + left + 'px');
};

var checkTypeFn = function(e){
  var eType = e.type;
  var evt = e.originalEvent;

  chType.text(eType);
  var ofCk = new OffsetFn(); // { top:00, left:00 } 
  var x, y, evtTouches, pointX, pointY

  if(e.type === 'touchmove'){
    evtTouches = evt.changedTouches[0]
    pointX = evtTouches.pageX;
    pointY = evtTouches.pageY;

    // 전체 포인터 x위치값에서 선택영역의 pageX만큼을 뺀 값
    x = pointX - ofCk.left ; 
    // 전체 포인터 y위치값에서 선택영역의 pageY만큼을 뺀 값  
    y = pointY - ofCk.top ;

    console.log( evt.changedTouches[0] );

  }else if(e.type === 'mousemove'){
    x = evt.offsetX;
    y = evt.offsetY;
  }

  chX.text(x);
  chY.text(y);
};


// mousemove
var option = false;
area.on('click', function(e){
  console.log( e.type );
});  

area.on('mousedown', function(e) {
  if(e.button === 0){ 
  option = true;
  // console.log('마우스 왼버튼 클릭으로 move기능 승인');
  }else{
    // console.log('마우스 왼버튼만 승인 가능합니다.')
  }
});

area.on('mouseup',function(e){
  option = false;
  // console.log('마우스 move기능 해제')
  chType.text('none');
  // setTimeout(function(){
  //   console.clear(); // clear() : (콘솔창) 내용 지우기
  // }, 3000);
});

area.on('mousemove', function(e){
  if(option){
    checkTypeFn(e);
    // console.log('마우스 움직이는 중');
  }
});

// js
// area.addEventListener('mousedown', function(e){ option = true; });
// area.addEventListener('mouseup', function(e){ option = false; });
// area.addEventListener('mousemove', function(e){ if(option){
//   console.log();
// }
// });

// css에선 hover == touchstart

area.on('touchstart', function(e){
  checkTypeFn(e);
  // console.log('이곳이 터치의 시작점!!!');
});

area.on('touchend', function(e){
  checkTypeFn(e);
  // console.log('이곳이 터치의 끝점!!!');
  // setTimeout(function(){
  //   console.clear();
  // }, 3000);
});

area.on('touchmove', function(e){
  checkTypeFn(e);
  // console.log('터치로 움직이는 중');
});



})(jQuery);