const setFn = (name) => `Hi ${name}`
const birthFn = (day) => `your birthday is ${day}`

export { setFn, birthFn }


// ES6방식
// 1. let, const
// 2. arrow function : function(){} -> ()=>{}
// 3. `내용 ${변수명} 내용 내용 내용`
// 4. {obs:obs, abs:abs} ----> {obs, abs}
// 5. export 변수명 --> import 변수명 from "파일위치"
// 5-1. 단, html문서에서 script의 속성 중 type="module"을 써줘야함