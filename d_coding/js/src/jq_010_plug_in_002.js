// jq_010_plug_in_002.js

(function($){
// jQuery

$.fn.makePlugIn_01 = function(setColor){

  var one = this; // $.fn = this = 내가 선택한 선택자로 치환
  var btn = one.find('button');
  var set = setColor || '#ff0';
  // if(setColor){ set = setColor }else{ set = '#ff0' }
  // (setColor) ? set = setColor : set = '#ff0';

  btn.on('click', function(e){
    e.preventDefault();
    one.find('p').css({
      color: set,
      textShadow:'0.1rem 0.1rem 0 #333'
    });
  });
  return one;

}

$.fn.makePlugIn_02 = function(option){

  var setArea = this;
  var btn = setArea.find('button');
  var p   = setArea.find('p');

  var setData = $.extend({ // $.extend : ex. setColor || '#ff0' 와 같은 역할
    color:'#ff0',
    bg:'#555',
    fs:1.5+'rem'
  },option);

  btn.on('click', function(e){
    p.css({
      color: setData.color,
      backgroundColor: setData.bg,
      fontSize: setData.fs
    });
  });

}

// $.fn -> jQuery에서 플러그인을 설정하는 세팅이자, 최후 선택자 연할
// $.extend({원래의값},option) -> 플러그인 생성시 주어진 매개변수의 값을 대체처리하기 위한 메소드

})(jQuery); // 플러그인을 jQuery에 넣어도 동작함.
