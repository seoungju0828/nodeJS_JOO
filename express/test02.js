/*
[파일명 : test02.js] 
static을 활용하여 정적 파일 서버 만드세요.
test02.js 가 존재하는 폴더에 img폴더가 존재합니다. 그 안에 해당 이미지 "dog.jpg"가 존재합니다.
조건 :
http://localhost:3001/img04/dog.jpg
웹 페이지 접속 시 아래와 같이 이미지가 나오도록 완성하세요.

*/
const express = require('express');
const app= express();
const port = 3000;

app.get('/img04/dog.jpg', function (req, res) {
    res.sendFile(__dirname+'/img/dog.jpg');
});

app.listen(port);