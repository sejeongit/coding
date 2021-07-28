// js_015_banner_01-3.js
(function($){
// jQuery
// -------------------------------------------------
// 역할 수행목록

// -------------------------------------------------
// 선택자 선언
var banner = $('.banner_03');
var countArea = banner.find('.count');
var countTotal = countArea.find('.total'); // 추후 전체개수
var countNow = countArea.find('.now') // 현재 보이는 배너

var slideBtnArea = banner.find('.slide_btn');
var slideBtn = slideBtnArea.find('button');

var productArea = banner.children('.product');
var productUl = productArea.children('ul');
var productLi = productUl.children('li');

// 임의 변수/변수 초기화 ==========================
var count = 0;


// 함수영역 ===========================
  // 현재 배너위치 체크
var nowCFn = function(){
  var nowMVCount = count + 1;
  countNow.text(nowMVCount);
}

// 배너가 이동할 위치를 파악 체크 
var mvFn = function(){
  var mv = -(100 * count) + '%';
  return mv;
}

// 기능수행 ==============================================

  // animation기능 수행을 위해 마지막 요소를 복제( clone() ) 앞에다 붙이기
  // 1. css에서는 js에서 순서를 바꿔도 그냥 바뀐대로의 순서로 배치
  // 2. js에서는 먼저 존재하는 내용을 선택하면 그걸로 끝, 새로 추가하면 다시 선택해야함

  var cloneLi = productLi.eq(-1).clone(); // eq(-1) : 뒤에서 첫번째 - js는 없는 기능
  productUl.prepend(cloneLi);
  // prepend : 앞에다 넣기 <-> append
  
  // clone() : 아무런 기능을 하지 않는 장식으로 복제
  // clone(true) : 기능까지 복제해 수행
  
  // 위에 정의한 productLi에서 개수변화는 없지만 실제로는 하나 늘어나 있음. 그래서 개수 재파악
  // li 개수 파악 및 total에 삽입
  var liLen = productLi.length;
  countTotal.text(liLen);
  // 현재 배너 위치 체크
  nowCFn(); // 단순 호출해 기능 수행

// 광고 영역의 크기 파악(새로 생성형태를 파악)
var newProductLi = productUl.children('li');
var newLiLen = newProductLi.length;
console.log(newLiLen);

// 1. 범위 파악(%로 대처) 
// 2. 전체 넓이 파악 후 재배치(변경된 li개수를 파악후 처리)
// productUl.css({'width': productWidth * newLiLen + 'px' });
productUl.css({'width': (100 * newLiLen) + '%' });
// 3. 각각의 넓이 재배치(변경된 li요소의 개수와 크기 수정)
newProductLi.css({'width': (100 / newLiLen) + '%' });
// 4. 처음 보이는 내용을 첫 li요소로 변경
productUl.css({'position':'relative', 'left':-100 + '%'});
// margin으로 움직이기 떄문에 position으로 배치 (position으로 움직이면 margin으로 배치)



// 이벤트 ===========================================
var permission = true;
// permission에 true를 대입하겠다.

slideBtn.on('click', function(e){
  e.preventDefault();

  if(permission){
    permission = false;
    // true == false가 아닌
    // = : 대입하다 / ==,=== : 같다
  
  // 다음버튼 클릭했으니 이제 이동
  
  // count++; 후치는 수행을 먼저 한 후 계산을 하기 때문에 *직접적으로 쓰면 맨처음 count = 0 으로 수행해 클릭해도 한번 안나옴.
  // 그래서 후치는 직접적으로 쓰지 말고 되도록 모든 수는 변수화할 것
  // ++count;
  count += 1;
  // var mv = -(100 * count) + '%';

  /*
    productUl.animate({marginLeft: mv}, function(){
      // 애니메이션 기능 처리 후 수행 (콜백기능 - 애니메이션은 콜백기능을 포함)
      if(count >= liLen) { count = 0; }
      productUl.css({marginLeft: mv});
      console.log( count );
      nowCFn();
    });
  */
  
  if( count >= liLen ){
    productUl.css({marginLeft: 100 + '%'}); // position으로 -100% 줬기 때문에 margin +100%줘서 이동
    count = 0;
    // productUl.animate({marginLeft : 0});
  }
  // else{
    // productUl.animate({marginLeft : mv});
  // }  이 방법이 좀더 빠름

  productUl.stop().animate({marginLeft: mvFn()}, function(){ permission = true; });
  nowCFn();
  } // permission 조건
}); // slideBtn.on('click' ...)


})(jQuery);