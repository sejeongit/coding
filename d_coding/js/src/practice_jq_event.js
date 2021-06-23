// practice_jq_event.js

(function($){

  var btnUl = $('.btn');
  var btnLi = btnUl.children('li');
  var timed = 1000;

  btnLi.eq(0).on('click', function(e){
    e.preventDefault();
    var cssState = btnLi.eq(1).css('display');

    if(cssState === 'block'){
      btnLi.eq(1).css({display:'none'});
    }else{
      btnLi.eq(1).css({display:'block'});
    }  
    });
  
  btnLi.eq(1).on('click', function(e){
     e.preventDefault();
     var cssState = contentLi.eq(1).css('display');
  
     if(cssState === 'block'){
        contentLi.eq(1).css({display:'none'});
     }else{
        contentLi.eq(1).css({display:'block'});
     }  
     });

  btnLi.eq(2).on('click', function(e){
   e.preventDefault();
   var cssState = contentLi.eq(2).css('display');
   
  if(cssState === 'block'){
     contentLi.eq(2).css({display:'none'});
  }else{
     contentLi.eq(2).css({display:'block'});
  }  
  });

  btnLi.eq(3).on('click', function(e){
    e.preventDefault();
    var cssState = contentLi.eq(3).css('display');
 
    if(cssState === 'block'){
       contentLi.eq(3).css({display:'none'});
    }else{
       contentLi.eq(3).css({display:'block'});
    }  
    });
 
  btnLi.eq(4).on('click', function(e){
    e.preventDefault();
    var cssState = contentLi.eq(4).css('display');
   
    if(cssState === 'block'){
       contentLi.eq(4).css({display:'none'});
    }else{
       contentLi.eq(4).css({display:'block'});
    }  
    });    

  btnLi.eq(5).on('click', function(e){
    e.preventDefault();
    var cssState = contentLi.eq(5).css('display');
   
    if(cssState === 'block'){
       contentLi.eq(5).css({display:'none'});
    }else{
       contentLi.eq(5).css({display:'block'});
    }  
    });    
 
   btnLi.eq(6).on('click', function(e){
     e.preventDefault();
    var cssState = contentLi.eq(6).css('display');
   
    if(cssState === 'block'){
       contentLi.eq(6).css({display:'none'});
    }else{
       contentLi.eq(6).css({display:'block'});
    }  
    });    

})(jQuery);