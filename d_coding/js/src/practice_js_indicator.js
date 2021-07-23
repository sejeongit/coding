// practice_js_indicator.js
(function($){
// jQuery

var indicator = part.children('.indicator');
var indUl = indicator.children('ul');
var indLi = indUl.children('li');
var indLink = indLi.find('a');

var part = $('.part');
var viewArea = part.children('.view_area');
var viewUl = viewArea.children('ul');
var viewLi = viewUl.children('li');
var viewLiLen = viewLi.length;

// var n = 0;
// var permission = true;

var cloneLi = viewLi.eq(-1).clone();




})(jQuery);