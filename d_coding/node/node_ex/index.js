// index.js

// express : node 서버 구현 // npm i express --save (개발자용 x) -> expess 설치
// http    : 인증서를 포함시킬 수 있는 // npm i http --save -> http 설치
// path    : 경로 // npm i path --save
// morgan  : 페이지 접속에 관련된 내용을 기록 처리 // npm i morgan --save ( console.log 처럼 )
// html package


// 설치된 package 불러오기 ------------------------
// const express = require('express')
import express from 'express'
import http from 'http'
import path from 'path'
import logger from 'morgan'

// 사용전 설정 -----------------------------------
const app = express()
const port = 1000
const __dirname = path.resolve()
// resolve() : 경로 잡아주는 메소드

// console.log('dirname: ', __dirname) // __dirname은 import방식 쓰면 사라짐
app.use( logger('dev') )
app.set('view engine', 'html')

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath)) // 기본경로 설정

// 함수로 설정 -----------------------------------
const setPathFile = function(file){
  // let filename = publicPath +'/html/' + file + '.html'
  let filename = `${publicPath}/html/${file}.html`
  return filename
}


// 페이지 구분 -----------------------------------
app.get("/", (request, response) => response.sendFile(setPathFile('home')) )
app.get("/home", (request, response) => response.sendFile(setPathFile('home')) )
app.get("/about", (request, response) => response.sendFile(setPathFile('about')) )
app.get("/product", (request, response) => response.sendFile(setPathFile('product')) )
// app.use( (request, response) => response.sendFile(sendPathFile('404')) )

/*
app.get("/", function(request, response){
  // get은 두개의 인자를 받음
  // response.send("node 기반의 서버 구동!!!")
  // response.sendFile( publicPath + '/html/home.html' )
  response.sendFile( setPathFile('home') )
})

app.get("/home", function(request, response){
  response.sendFile( setPathFile('home') )
})

app.get("/about", function(request, response){
  response.sendFile( setPathFile('about') )
})

app.get("/product", function(request, response){
  response.sendFile( setPathFile('product') )
})

// 에러(404)
app.use(function(request, response){
  response.sendFile( setPathFile('404') )
})
*/

// use : 상태를 파악하는 메소드. get보다 포괄적인 개념 use(큰단위) > get(작은단위)

// 터미널에서 node로 실행하고 파일 수정하고 저장하면 터미널에서 node 껐다 다시 켜야함
// nodemon : 터미널에서 node index로 실행시킨뒤 파일을 수정하고 터미널에서 껐다가 다시 키지 않아도 알아서 새로고침


/*
const page = ['home', 'about', 'page', 'product']
page.push('')
page.forEach( (data,i) => {
  app.get('/' + data, (request, response) => {
    (data === '') ? data = 'home' : data = data
    return response.sendFile(setPathFile(data))
  })
});
*/


// 서버 구동 -------------------------------------
// app.listen(port, function(){ console.log('server 구동 : https://localhost:'+ port) })
http.createServer(app).listen(port, function(){ console.log('server 구동 : https://localhost:'+ port) })

// app : express 기반
// http : http 기반


