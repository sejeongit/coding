// import app from ('express')
const express = require('express')
const app = express()
const port = 3000

// console.log( __dirname ) 현재 디렉토리 이름 확인 기능
// console.log( __filename ) 현재 파일 이름 확인 기능 -> node.js의 기능 

// app.메소드(경로, 처리)
// app.method(req, res)

app.get('/', function(req, res){
  res.send('서버가 동작하고 있습니다. 여기가 첫페이지입니다.')
  // res.send( __dirname + '/main.html' )
})

app.listen(port, function(){
  console.log( ' 웹페이지 구동 가능 주소는 \n http://localhost:' + port )
})

