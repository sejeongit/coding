// practice_parallax.js
(function($){
// jQuery

var wrap = $('#wrap');
var image = wrap.chlidren('.image');
var backImg = image.attr('backgroundPosition')


// var scrollMoveFn = function(it){
//   var target = image.css(backgroundPosition);
//   var targetOffset = target.offset().top;
//   var move;
//   var wrapOffset = wrap.offset().top;
//   (targetOffset == wrapOffset) ? move = wrapOffset : move = targetOffset
// }


// image.on('scroll', function(e){
//   e.preventEvent();
//   scrollMoveFn();
// });


var scrollMoveFn = function(it){
  var startPosition = it.attr({'backgroundPosition' : '0 100%'});
  var finishPosition = it.attr({'backgroundPosition' : '0 0'});

  var wrapPosition = wrap.attr('backgroundPosition');

  if( imgPosition == startPosition) {
    it.animate({'backgroundPosition' : '0 0'});
  }else{
    it.animate({'backgroundPosition' : '0 100%'});
  }

};

wrap.on('scroll', function(e){
  e.preventDefault();
  scrollMoveFn(image);
});




})(jQuery);