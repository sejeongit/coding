import * as set from './base.js'
// * : base.js의 모든 것을 set으로 가져오겠다
// == const set = {setFn = function(){}, birthFn : ... }

// require와 import는 같은 기능. require는 node 기반, import는 아님 
// 요즘은 import 방식을 사용, 둘다 같이 쓰는건 안됨

const result = set.setFn('sj');
const myDay = set.birthFn(17);
console.log(result);
console.log(myDay);