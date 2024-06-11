/*
[파일명 : test03.js] 
다음과 같이 URL을 달리하여 처리할 수 있도록 하는 라우터를 작성하시오.(단 하나의 라우터로 두 URL모두 처리되어야합니다.)
조건 :
http://localhost:3001/subject/node
http://localhost:3001/subject/math
웹 페이지 접속 시 아래와 같이 이미지가 나오도록 완성하세요.
*/
const express = require('express');
const app = express();

app.get('/subject/node', function (req, res) {
    res.send('과목명은 node입니다.')
});

app.get('/subject/math', function (req, res) {
    res.send('과목명은 math입니다.')
});

app.listen(3000)