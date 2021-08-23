console.log('hello nodejs');

var hello = function(){ return 'hello '; }

var myName = function(itName){ return itName };

var nameSet = hello() + myName('sejeong');
console.log( nameSet );

