// practice_js_event.js
(function($){
// jQuery

var window = $('.window');

window.on('mousemove', e => {
 result.innerHTML = '<div>screenX,Y : (${e.sreenX}, ${e.screenY})</div>';
 
})(jQuery);