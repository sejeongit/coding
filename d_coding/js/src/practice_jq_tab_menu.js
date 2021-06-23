// practice_jq_tab_menu.js

(function($){
  var tab1stUl = $('.tab_first');
  var tab1stLi = tab1stUl.find('li');
  var tab2ndUl = $('.tab_second')
  var tab2ndLi = tab2ndUl.children('li');
  var conUl = $('.content');
  var conLi = conUl.children('li');
  var btn1st = tab1stLi.children('button')
  var btn2nd = tab2ndLi.children('button')

  btn2nd.on('click', function(e){
    e.preventDefault();
    var thisI = $(this);
    var viewCon = conLi.indexOf(2);
    var conCheck = viewCon.css('display') === 'none';

    viewCon.siblings('li').hide();
    
    
    if(conCheck){
      viewCon.show();

    }else{
      viewCon.hide();
    }

  });
  

})(jQuery);