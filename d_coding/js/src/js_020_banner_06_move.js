// js_020_banner_06_move.js
(function($){
// jQuery

  // 1. 마우스로 누른 위치와 떼는 위치의 값을 확인 후 배너의 요소를 교체
  // 101. 마우스 누른 위치과 떼는 위치값으로 1씩 더하거나 빼기
  // 102. 값이 + 이면 다음요소를 나타나게
  // 104. 값이 + 일 경우 마지막 요소가 나타나면 첫 요소로 다시 이동
  // 106. 다음요소가 나타나면 이전에 있던 요소의 .act를 빼고, 새로 나타난 요소에 재할당

  // 103. 값이 - 이면 이전요소를 나타나게
  // 105. 값이 - 일 경우 첫 요소가 나타나면 마지막 요소로 다시 이동

  var banner = $('.banner_touch');
  var viewArea = banner.find('.view_area');
  var viewLi = viewArea.find('li');

  var viewLiLen = viewLi.length;

  var startPoint;
  var endPoint;
  var resultPoint;
  
  var newN = 0;
  var beforeN = newN;

  // 함수
  var evtPositionFn = function(e){
    var evt = e.originalEvent;
    var eType = e.type.slice(0,5) // touchstart, touchend -> touch만 표시 : mouse인지 touch기반인지만 알아보기 위해
    // 글.slice(시작위치, 개수);

    var checkPoint;
  /*
    if(eType === 'touch'){
      checkPoint.evt.changedTouches[0].pageX;
    }else{
      checkPoint.evt.pageX;
    }
  */
    (eType === 'touch') ?
      checkPoint = evt.changedTouches[0].pageX :
      checkPoint = evt.pageX;
    
    return checkPoint;
  };

  // 이벤트 
  viewArea.on('mousedown touchstart', function(e){
    // 이벤트 발생 기준으로 위치값을 파악
    startPoint = evtPositionFn(e);
  });
  viewArea.on('mouseup touchend', function(e){
    endPoint = evtPositionFn(e);
    resultPoint = startPoint - endPoint;
    // 시작점, 끝점의 위치값이 음/양수에 대해 판단하여 내용을 다음버튼/이전버튼 수행
    if(resultPoint > 50){
      newN += 1;
      // if(newN > viewLiLen-1){ newN = 0 }
    }else if(resultPoint < -50){
      newN -= 1;
      // if(newN < 0){ newN = viewLiLen-1 }
    }

    // 제한점 기준으로 수치 강제이동
    if(newN > viewLiLen-1){
      newN = 0;
    }else if(newN < 0){
      newN = viewLiLen - 1;
    }   

    // 값이 변한 경우에 슬라이드 수행
    if(beforeN !== newN){
      viewLi.eq(newN).show();
      viewLi.eq(beforeN).fadeOut(function(){
        viewLi.eq(beforeN).removeClass('act');
        viewLi.eq(newN).addClass('act');
        beforeN = newN; // 순환해야 하기 때문에 수를 바꿔 입력
      });
    }

  }); // viewArea.on('mouseup touchend');


})(jQuery);