// practice_js_gallery_02.js
(function($){
// jQuery

var galData = [
  {
    'img' : 'agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg',
    'text' : '001 - 상세설명'
  },
  {
    'img' : 'alexander-andrews-BX4Q0gojWAs-unsplash.jpg',
    'text' : '002 - 상세설명'
  },
  {
    'img' : 'bench-accounting-nvzvOPQW0gc-unsplash.jpg',
    'text' : '003 - 상세설명'
  },
  {
    'img' : 'cristina-matos-albers-Ltv7a5m8i4c-unsplash.jpg',
    'text' : '003 - 상세설명'
  },
  {
    'img' : 'daniele-franchi-YBQY-hdd-Yg-unsplash.jpg',
    'text' : '003 - 상세설명'
  },
  {
    'img' : 'galina-n-miziNqvJx5M-unsplash.jpg',
    'text' : '003 - 상세설명'
  }
  

]

var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>';
var gallery = $('.gallery');
var bigImage = gallery.find('.big_image');
var imgUrl = '../img/gallery_02/original/';

var galLi, LiSource, LiText;

var i = 0;

var baseLisetFn = function(i){
  gallery.append(makeLi);
  galLi = gallery.children('li').eq(i);
  LiSource = 'url(' + imgUrl + galData[i].img + ')';
  LiText = galData[i].text;

  galLi.children('a').css({backgroundImage:LiSource});
  galLi.find('span').text(LiText);
};

var galLength = galData.length;
for ( ; i < galLength ; i += 1 ){
  baseLisetFn(i);
}

var setGalSystemFn = function( idx ){
  var bigImgSet = imgUrl + galData[idx].img;

  var bigContent = bigImage.children('big_content');
  var beforeCon = bigContent.eq(0);
  var afterCon = bigContent.eq(1);

  afterCon.css({backgroundImage: 'url(' + bigImgSet + ')'});
  afterCon.show();

  setTimeout(function(){
    beforeCon.fadeOut(200,function(){
      beforeCon.removeClass('act');
      afterCon.addClass('act');
      // 1. append는 내부의 뒤에 생성의 기능을 가진다.
      // 2. 기존에 있는 요소라면 뜯어서 옮기는 기능을 가진다.
      big_image.append( $(this) ); // big_img 내부에 $(this)를 담겠다
      // $(this).appendTo( big_image ); // $(this)를 big_img 내부에 담겠다.
  });
  },10);

  galLi.eq( idx ).siblings('li').removeClass('act');
  galLi.eq( idx ).addClass('act');
};


})(jQuery);