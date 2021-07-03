// practice_js_gallery.js
(function($){
// jQuery

var gallery = $('.part');
var galUl = gallery.find('ul');
var galLi = galUl.children('li');
var thumb;

var setLi = function(n){
  var setText = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
  return setText;
}

var listUrl = '../img/gallery/u_thumbnail/';
var bigUrl = '../img/gallery/u_big/';
var galImgList = [
  {
    'thumbnail':'image_001.jpg',
    'contents':'001_thumbnail_설명',
    'big':'image_001.jpg'
  },
  {
    'thumbnail':'image_002.jpg',
    'contents':'002_thumbnail_설명',
    'big':'image_002.jpg'
  },
  {
    'thumbnail':'image_003.jpg',
    'contents':'003_thumbnail_설명',
    'big':'image_003.jpg'
  },
  {
    'thumbnail':'image_004.jpg',
    'contents':'004_thumbnail_설명',
    'big':'image_004.jpg'
  },
  {
    'thumbnail':'image_005.jpg',
    'contents':'005_thumbnail_설명',
    'big':'image_005.jpg'
  }
]

var listConFn = function(){
  thumb = listUrl + galImgList[i].thumbnail;
  galLink = galUl.children('li').eq(i).children('a');
  galLink.css({'backgroundImage':'url('+ thumb +')'});
  galLink.find('span').text( galImgList[i].contents );
}

var galLink;
var galListLen = galImgList.length;
for(var i = 0 ; i < galListLen ; i++){

  galUl.append( setLi( i + 1 ) );
  listConFn();
}

var galBig = gallery.find('.big_img');

var setBigFn = function(n) {
  galBig.css({
    'backgroundImage':'url('+ bigUrl + galImgList[n].big +')',
    'backgroundSize':'cover'
  });
};

setBigFn(0);

var galELink = galUl.children('li').children('a');
galELink.on('click', function(e){
  e.preventDefault();
  var setI = $(this).parent().index();
  setBigFn(setI);
});



})(jQuery);
