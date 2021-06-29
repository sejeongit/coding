// js_013_gallery_01.js
(function($){
// jQuery

// 1. li 클릭시(사실은 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-text 속성값을
// 3. .big_image 내부 p에 전달

var gallery_01 = $('.gallery_01');
var galUl = gallery_01.children('ul');
var galLi = galUl.children('li');

var gal_01_box = $('.gallery_box_01');
var galP = gal_01_box.children('p')

var liConvertText = function(){
  return function(event){
    event.preventDefault();

    var thisLink = $(this).children('a');
    var thisData = thisLink.attr('data-text');
    // console.log( thisData );  
    galP.text(thisData);
  }
};

galLi.on('click', liConvertText() );
// -----------------------------------------------------

// 1. gallery_02 li 클릭시(사실은 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-text 속성값을
// 3. .big_image 내부에 전달

var gal_02 = window.$('.gallery_02');
var gal_02_box = gal_02.find('.big_image');
var gal_02_p = gal_02_box.find('p');

var gal_02_list = gal_02.find('li');
var galUrl = '../img/gallery/u_big/';

var gal02_firstText = gal_02_list.eq(0).find('a').attr('data-text');
gal_02_p.text(gal02_firstText);
// ----------------------------------------------------------------

gal_02_list.children('a').on('focus click', function(e){
  e.preventDefault();
  // 해당요소의 속성(data-image) 값을 찾아라
  var select = $(this);
  var selectImg = select.attr('data-image');
  // console.log( selectImg );
  var useImg = galUrl + selectImg
  gal_02_box.css({'backgroundImage':'url(' + useImg + ')'});

  // 해당요소의 속성(data-text) 값을 p요소에 적용
  var selectText = select.attr('data-text');
  gal_02_p.text(selectText);
});

// ----------------------------------------------------------------


// 1. .gallery_03 내부의 li요소를 생성
// 2. 생성되는 li를 내가 만들고자 하는 개수만큼
// 3. 적용할 data속성을 생성해서 담기 - 차후 삭제
// 4. 나머지 기능은 위와 동일

var gallery_03 = $('.gallery_03');
var gallery_03_Ul = gallery_03.find('ul');
var thum;
/*
var n = 1;
var set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
gallery_03_Ul.append(set_03_Li);

n = 2;
var set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
gallery_03_Ul.append(set_03_Li);

n = 3;
var set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
gallery_03_Ul.append(set_03_Li);
 */


// var n = 0;
var set_03_Li = function(n){
  var setText = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
 return setText;
};

// js는 실사용하는 html문서를 기준
var listUrl = '../img/gallery/u_thumbnail/';
var bigUrl = '../img/gallery/u_big/';
var galleryimgList = [
  {
    'thumbnail':'image_001.jpg',
    'contents' :'001_thumbnail_설명',
    'big':'image_001.jpg',
    'bigNarr':'001_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumbnail':'image_002.jpg',
    'contents' :'002_thumbnail_설명',
    'big':'image_002.jpg',
    'bigNarr':'002_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumbnail':'image_003.jpg',
    'contents' :'003_thumbnail_설명',
    'big':'image_003.jpg',
    'bigNarr':'003_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumbnail':'image_004.jpg',
    'contents' :'004_thumbnail_설명',
    'big':'image_004.jpg',
    'bigNarr':'004_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumbnail':'image_005.jpg',
    'contents' :'005_thumbnail_설명',
    'big':'image_005.jpg',
    'bigNarr':'005_디테일 설명을 작성하시면 됩니다.'
  },
];

// var test = ['a',['b','b-1','b-2',['bbb','34','1'] ],'c'];
// var t2 = test[1];
// // console.log( t2[2] );
// console.log(  test[1][3][2] );


// 아래 append를 적용 후 추가 기능을 삽입하기 위한 함수 설정 : 내용이 많기에...
var listContentFn = function(){
  thum = listUrl + galleryimgList[i].thumbnail;
  galLink = gallery_03_Ul.children('li').eq(i).children('a');
  galLink.css({'backgroundImage':'url('+ thum +')', color:'#fff'});
  galLink.find('span').text( galleryimgList[i].contents );
};



// for(최초;비교;증감){}
var galLink;
var galListLen = galleryimgList.length;
for(var i = 0 ; i < galListLen ; i++){

  gallery_03_Ul.append( set_03_Li( i + 1 ) );
  // thum = listUrl + galleryimgList[i].thumbnail;
  // galLink = gallery_03_Ul.children('li').eq(i).children('a');
  // galLink.css({'backgroundImage':'url('+ thum +')', color:'#fff'});
  // galLink.find('span').text( galleryimgList[i].contents );
  listContentFn();
}

var gal_03_big = gallery_03.find('.big_image');
var gal_03_p = gal_03_big.find('p');


var setBigInsertFn = function(n){
  gal_03_big.css({
    'backgroundImage':'url('+ bigUrl + galleryimgList[n].big +')',
    'backgroundSize':'cover'
  });
  gal_03_p.text(galleryImgList[n].bigNarr);
};

// .big_image에 첫 배경 이미지 적용
// gal_03_big.css({'backgroundImage':'url(' + bigUrl + galleryimgList[0].big + ')'});

// .big_image p에 첫 내용 적용
// gal_03_p.text(galleryimgList[0].bigNarr);
setBigInsertFn(0);

var gal03Link = gallery_03_Ul.chlidren('li').children('a');
gal03Link.on('click', function(e){
  e.preventDefault();
  var setI = $(this).parent().index();
  // console.log(setI);
  setBigInsertFn(setI);
});


})(jQuery);