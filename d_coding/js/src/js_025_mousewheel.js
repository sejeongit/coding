// js_025_mousewheel.js
(function($){
// jQuery

// 1. .info의 높이를 브라우저 화면의 높이만큼 재설정
// 2. 실시간(win.resize())으로 브라우저 크기가 변경되면 같이 높이 변경(함수 setWinHFn() )
// 3. 마우스 휠을 움직였을 때 움직였음을 파악 (이벤트 : mousewheel, 범위 : $('html,body')
// 4. 일부 브라우저(firefox)는 mousewheel이 없다 (DOMMouseScroll)
// 5. 스크롤 처리에 대한 범위를 확장 (마우스 휠, 터치움직임, 트랙패드/터치패드, 터치마우스)
// 6. 현시점(2021년)에서는 가로로 긴~~ 모니터들이 매우 많아졌기에 화면마다 변화하는 것을 제작하기엔 다소 진부한 부분이 있어
//    권장은 첫 화면만(상단) 움직이는 정도로 권장하여, 해당 스크롤 위치로 한번에 이동효과


// web, app
// web, app, 가상환경(VR/AR)
// web + webVR/webAR, webApp(PWA) --> web
// 적응형웹 X, 반응형웹(가로비율이 엄청 길거나, 세로비율이 엄청 긴 페이지에서도 동작
// GPS + 자이로스코프 + 지도좌표 + AR


// =======================================================
// 변수
var win = $(window);
var viewDoc = $('html, body'); // 어떤 브라우저는 html, 어떤 브라우저는 body를 인식하므로 두개 다 써줌
var info = $('.info');
var recommend = true;
var countScroll = 0;
var winH;


// 기능

// 함수
// 2. 100vh가 안먹거나 에러나는 브라우저들이 있으므로 이렇게 처리
var setWinHFn = function(){
  winH = win.outerHeight();
  info.css({height: winH + 'px'});
};


var setScrollFn = function(n){
  recommend = false;
  var moveH = winH * n;
  viewDoc.animate({scrollTop:moveH + 'px'}, function(){
    recommend = true;
  });
};  


// ======================================================
setWinHFn();
setScrollFn(0); // 새로고침하면 브라우저 맨 상단으로 이동

// 이벤트
win.on('resize', function(){ setWinHFn(); });

viewDoc.on('mousewheel DOMMouseScroll', function(e){
  var winScrollTop = win.scrollTop();

  var evt = e.originalEvent;
    // console.log(e.type);
    // mousewheel : evt.wheelDelta -> 120 | -120  나머지 브라우저 마우스휠 값
    // mousewheel : evt.detail -> 0
    // DOMMouseScroll : evt.detail -> 3 | -3  firefox 마우스휠 값 
    var delta = 0;
    ( e.type === 'DOMMouseScroll') ? delta = evt.detail * -40 : delta = evt.wheelDelta;
    console.log( delta, winScrollTop, countScroll );

  if(recommend){
    if(delta < 0 && winScrollTop >= 0 && countScroll <= 0){
      countScroll += 1;
      setScrollFn(countScroll);
    }else if(winScrollTop <= winH && delta > 0 && countScroll > 0){
      countScroll = 0;
      setScrollFn(countScroll);
    }
    // console.log(winH, winScrollTop, countScroll);
    }

});


})(jQuery);