// js_023_rwd_header_laptop.js
(function($){
// jQuery

// 변수
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
var gnbList = gnb.find('.gnb_list');
var navTitle = gnbList.find('.nav_title');
var navContent = gnbList.find('.nav_content');
var timed = 500;


  // 2. 노트북에서 기능 구현
  // 200. gnb_list 내부의 li에 마우스 올리면 하위 ul이 나타나게
  // 201. gnb_list 내부 .nav_title에 focus처리시 기능 수행 ('.nav_content' 나타나게)
  // 202. gnbBtn은 1280 이상의 기기에서는 동작하지 않으므로, 코드 삭제

  // 200. 마우스 제어
  navTitle.on('mouseenter', function(){
    $(this).parent().siblings().find(navContent).stop().slideUp(timed/2);
    $(this).next(navContent).slideDown(timed/2);
    // next() : 바로 옆
  });
  gnb.on('mouseleave', function(){
    navContent.stop().delay(timed/3).slideUp();
    // delay() : setTimeout과 같은 기능. 애니메이션 앞에 쓸 것
  });

  // 201. 키보드 제어
  navTitle.find('a').on('focus', function(){
    // e.preventDefault() : a의 페이지 이동기능 없애기
    var _this = $(this).parents('li');
    // parents('li') : 부모 중의 li
    // parent().parent() : 부모의 부모
    console.log( _this );
    _this.siblings().find(navContent).stop().slideUp(timed/2);
    _this.find(navContent).stop().slideDown(timed/2); 
  });

  gnb.find('a').on('keyup', function(e){
    var evtKey = e.key.toLowerCase(); // to가 붙으면 ~로 바꿔라
    var isEsc = evtKey === 'escape';
    if( isEsc ){
      $(this).blur(); // blur() : 포커스 해제
      navContent.stop().slideUp(timed/2);
    }
  });

  // 203.
  gnbBtn.parent().remove(); // remove() : 완전삭제

})(jQuery);