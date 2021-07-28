// js/src/practice_js_dom_test_01.js

var ediyaProduct = document.getElementsByClassName('product')[0];
ediyaProduct.style.width = '500px';

var optionElement = document.createElement('li');
optionElement.append('팥인절미 1인빙수');
ediyaProduct.appendChild(optionElement);

