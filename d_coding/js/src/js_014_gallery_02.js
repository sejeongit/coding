// js_014_gallery_02.js
(function($){
// jQuery

var galleryData = [
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

// -------------------------------------------------------------------
// 1. 작은 이미지를 마우스 올릴경우 다음과 같은 기능을 수행
// 2. 작은이미지에 들어있는 이미지와 같은형태의 큰이미지의 주소를 찾아서
         // bigUrl + galleryData[i].bigImg
// 3. 큰 영역에 배경이미지로 배치
// 4. 이때, 작은이미지가 어떤 것이 선택되었는지 **주목성**이 있도록 처리
// 5. 주목성처리: class="act" 삽입
// 추가기능1 : 작을 이미지를 선택할 때, 다른 영역에 있는 형태는 act해제
// 추가기능2 : 마우스가 아닌 키보드 focus 처리
// 추가기능3 : 클릭시 처리되는 부분도 일부 해결

// -----------------------------------------------------------------
// 이외에 첨부하면 좋을 기능
// bigImage 영역에 이미지가 바뀌면 깜빡이는 현상을 조정
//  1. bigImage영역 내부에 2개의 영역 생성 앞/뒤로 배치
//  2. 앞에 있는 것은 현재 보이는 것, 뒤에 존재하는 건 기본 display:none
//  3. 작은 이미지에 마우스 처리하면, bigImage 뒤에 내용을 삽입하고, 동시에 display:block
//  4. 앞에 있는 요소를 사라지게(방법은 자유)
//  5. 뒤에 존재하는 요소를 앞으로 오게 처리(z-index를 이용, 앞의 요소를 뜯어서 뒤로 이동)
//  6. 뒤로 이동한 요소는 내부를 비우기

// 응용방법 : 배너광고 형태 중 fade 형식으로 되는 형태를 이해할 수 있다.
// ------------------------------------------------------------------

var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>';
var gallery  = $( '.gallery' );
var thumbnail  = gallery.find('.thumbnail');
var big_image  = gallery.find('.big_image');
var bigContent = big_image.children('.big_content')

var thumbUrl = '../img/gallery_02/mini/';
var bigUrl = '../img/gallery_02/original/';


// for문 안에 있는 변수 먼저 선언
var thumbnailLi, listSource, listText; 

// for(최초;조건;증감){}
var i = 0;

// big_image.css({backgroundImage:'url('+ bigUrl + galleryData[i].bigImg +')'});

var baseLiSetFn = function(i){
    // thumbnail 내부에 makeLi를 채우기(append : 내부에서 뒤에 채우기)
    thumbnail.append(makeLi);
    thumbnailLi = thumbnail.children('li').eq(i);
    listSource = 'url(' + thumbUrl + galleryData[i].miniImg + ')';
    listText = galleryData[i].miniText;
  
    thumbnailLi.children('a').css({backgroundImage:listSource});
    thumbnailLi.find('span').text(listText);
};


var thumbLength = galleryData.length;
for( ; i < thumbLength ; i += 1 ){
  baseLiSetFn(i);
}

// 중복기능 함수로 제작
var setGallerySystemFn = function( idx ){
  var bigImgSet = bigUrl + galleryData[ idx ].bigImg;

  // 큰이미지 위치 수정
  // bigContent.eq(0).css({backgroundImage:'url('+ bigImgSet +')'}); // 임시

  var bigContent = big_image.children('.big_content');
  var beforeEl = bigContent.eq(0);
  var atferEl = bigContent.eq(1);
 
    atferEl.css({backgroundImage:'url('+ bigImgSet +')'});
    atferEl.show();

    setTimeout(function(){
      beforeEl.fadeOut(200,function(){
        beforeEl.removeClass('act');
        atferEl.addClass('act');
        // 1. append는 내부의 뒤에 생성의 기능을 가진다.
        // 2. 기존에 있는 요소라면 뜯어서 옮기는 기능을 가진다.
        big_image.append( $(this) ); // big_img 내부에 $(this)를 담겠다
        // $(this).appendTo( big_image ); // $(this)를 big_img 내부에 담겠다.
    });
  },10);

  thumbnailLi.eq( idx ).siblings('li').removeClass('act');
  thumbnailLi.eq( idx ).addClass('act');
};//setGallerySystemFn(0);

// ---------------------------------------------------------------------
// 전체 thumbnail 내부의 li를 재선정
thumbnailLi = thumbnail.children('li');

setGallerySystemFn(0);

thumbnailLi.on('mouseenter', function(e){
  // 선택된 요소의 순번 파악
  var _thisI = $(this).index();
  setGallerySystemFn(_thisI);
});

thumbnailLi.find('a').on('focus click', function(e){
  e.preventDefault();
  var _thisI = $(this).parent().index();
  setGallerySystemFn(_thisI);
});

// ------------------------------------------------------------------

// javascript : jQuery 기능 비교
// 1. 순서 지정 
// 2. 기능 지정

// 1. js에서는 순서지정이 배열형식과 같다,
// var li = document.querySelectorAll('li');
// li[0]

// 2. 자동으로 각각 처리되는 것이 없으므로 for문을 이용하여 하나하나 처리되게 해야한다.
// for (var i=0; i<10; i++){  li[i].style.color="#000";  }
// for(var n = 0; n < 10; n++){  li[n].on('click', function(){  }); }

// ---------------------------------------------------------------------

// 1. jQuery에서는 메서드로 별도로 구성이 되어있어 eq(n)
// var li = $('li');
// li.eq(0)

// 2. 선택자의 경우에는 요소를 선택함과 동시에 반복문을 처리하게 만들 수 있다. - for문을 사용할 필요가 없다.
// li.css({color:'#345'});
// li.on('click', function(){});

// ------------------------------------------------------------------

})(jQuery);