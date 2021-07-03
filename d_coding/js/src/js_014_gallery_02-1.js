// js_014_gallery_02-1.js

(function($){
// jQuery
var modalData = [
  {
    "miniImg":"agenlaku.jpg",
    miniText:'thumbnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumbnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumbnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumbnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세설명 첨부'
  },
  {
    miniImg:'c.jpg',
    miniText:'thumbnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세설명 첨부'
  },
  {
    miniImg:'agenlaku.jpg',
    miniText:'thumbnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumbnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumbnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumbnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세설명 첨부'
  },
  {
    miniImg:'c.jpg',
    miniText:'thumbnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세설명 첨부'
  },
  {
    miniImg:'agenlaku.jpg',
    miniText:'thumbnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumbnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumbnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumbnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세설명 첨부'
  },
  {
    miniImg:'c.jpg',
    miniText:'thumbnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세설명 첨부'
  },
  {
    miniImg:'agenlaku.jpg',
    miniText:'thumbnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumbnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumbnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumbnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세설명 첨부'
  },
  {
    miniImg:'c.jpg',
    miniText:'thumbnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세설명 첨부'
  },
  {
    miniImg:'agenlaku.jpg',
    miniText:'thumbnail_01',
    bigImg:'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    bigText:'001 - 상세설명 첨부'
  },
  {
    miniImg:'alexander.jpg',
    miniText:'thumbnail_02',
    bigImg:'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    bigText:'002 - 상세설명 첨부'
  },
  {
    miniImg:'annie.jpg',
    miniText:'thumbnail_03',
    bigImg:'annie-spratt-cxAZxTuL7Sk-unsplash.jpg',
    bigText:'003 - 상세설명 첨부'
  },
  {
    miniImg:'bench.jpg',
    miniText:'thumbnail_04',
    bigImg:'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    bigText:'004 - 상세설명 첨부'
  },
  {
    miniImg:'c.jpg',
    miniText:'thumbnail_05',
    bigImg:'c-d-x-PDX_a_82obo-unsplash.jpg',
    bigText:'005 - 상세설명 첨부'
  }
];

// 1. 클릭해야하는 이미지 삽입
// 1-1. 각각의 이미지는?, 삽입할 이미지는?, 추가 내용은? - 객체로...
// 2. 클릭시 .modal_view 나타나게
// 3. .modal_view 내부의 .modal_content에 이미지 나타나게
// 4. .modal_view 내부의 닫기버튼 클릭시 .modal_view 사라지게
//  4-1. .modal_view 뒤에 있는 .back_board를 클릭시 .modal_view 사라지게
// 5. 클릭시 닫기버튼에 자동 포커스처리 및 닫기 클릭시 이전요소의 순번에 포커스
// --------------------------------------------------------------------
// 6. li요소 생성
// 7. 다음/이전버튼 html로 생성
// 8. 클릭시 이동
//  8-1. 다음버튼 클릭시 이동
// --------------------------------------------------------------------


var miniUrl = '../img/gallery_02/mini/';
var bigUrl = '../img/gallery_02/original/';

var modal = $('.modal');
var modalListArea = modal.children('.modal_list');
var modalListUl = modalListArea.children('ul');

var modalView = modal.find('.modal_view');
var modalContent = modal.find('.modal_content');
var closeBtn = modalView.find('.close_btn').children('button');
var backBoard = modalView.find('.back_board');

var i=0, n=0, idx = 0; // 넘버링 들어가는건 0 쓰는게 보편적
var timed = 500;

var modalDataLen = modalData.length;
// -------------------------------------------
// li 생성기능
var makeLi = '<li><a href="#"></a></li>';

for( ; n<modalDataLen; n+=1 ){
  modalListUl.append(makeLi);
  // append : 존재하는걸 넣으면 거기서 뜯어서 지정한 곳에 집어넣고(ctrl+x, ctrl+v),
  // 존재하지 않는건 새로 집어넣음.
}
// -------------------------------------------
var modalLi = modalListArea.find('li');

// li 첫번째의 가로값 파악하기
// width() -> 가로값을 파악
// innerWidth() -> padding값 포함 가로값 파악
// outerWidth() -> border값 포함 가로값 파악
// outerWidth(true) -> margin값 포함 가로값 파악 - js엔 없음
// css('width') -> 이렇게 쓰면 단위까지 나와 계산할때 불편해 잘안씀

var getLiWidth = modalLi.eq(0).outerWidth(true);
// console.log( getLiWidth );
var setModalUlWidth = (getLiWidth * modalDataLen)+'px';
modalListUl.css({width: setModalUlWidth});
modalListArea.css({overflow:'hidden'});

// 8-1
var slideBtn = $('.list_slide_btn');
var nextBtn = slideBtn.children('.next_btn');
var prevBtn = slideBtn.children('.prev_btn');
var mv = 0;

nextBtn.on('click', function(e){
  e.preventDefault();
  // mv -= 1; // -1, -2, -3 ...
  (mv <= -(modalDataLen-7)) ? mv = -modalDataLen + 7 : mv -=1; 
  (mv <= -7) ? mv = -modalDataLen + 7 : mv -=1;//-1  -2


  modalListUl.stop().animate({marginLeft: ( getLiWidth * mv ) + 'px' });
  // animate : css의 transition 기능이 일부 포함. 움직임을 자연스럽게 만들어줌
});

// -------------------------------------------
var miniImgInsertFn = function(i){
  var modalLink, imgData;
  modalLink = modalLi.eq(i).children('a');
  imgData = miniUrl + modalData[i].miniImg;
  modalLink.css({backgroundImage:'url(' + imgData + ')'});
  modalLink.text(modalData[i].miniText);
};

for(; i<modalDataLen; i+=1){ miniImgInsertFn(i); }


modalLi.children('a').on('click', function(e){
  e.preventDefault();
  // 선택한 요소의 부모요소의 순번파악( index )
  var _thisI = $(this).parent().index(); // index : 순서를 물어보고 parent에서 찾아줌.
  idx = _thisI;
  // var bigImgArea = 큰이미지 경로 + modalData[클릭한 순번의].bigImg;
  var bigImgArea = bigUrl + modalData[_thisI].bigImg; // idx, _thisI 둘다 써도 상관없다.
  modalContent.css({backgroundImage:'url(' + bigImgArea + ')'});

  modalView.stop().fadeIn(timed, function(){
    closeBtn.focus();
  });

});

var modalViewHideFn = function(){
// 함수를 그냥 쓰면 동작을 안하므로 
// 1. 앞에 이름 선택자 쓰기
// 2. return으로 함수 값 불러오기 - 권장
// 3. 즉시실행함수 (function(){})(); 로 실행

  return function(e){
    e.preventDefault();
    modalView.fadeOut(timed, function(){
      modalLi.eq(idx).children('a').focus(); // eq : 값을 집어넣을 땐 eq로 찾아 집어넣음.
    });
  }
};

closeBtn.on('click', modalViewHideFn() );
backBoard.on('click', modalViewHideFn() );


// forEach와 유사하지만 다른 jQuery each 
// [배열].forEach(function(배열의 각값, 순서){ 기능수행 })
// $.each([배열], function( 순서, 배열의 각값 ){ 기능수행 })

$.each([closeBtn, backBoard], function(i, data){
  data.on('click', modalViewHideFn());
});


})(jQuery);