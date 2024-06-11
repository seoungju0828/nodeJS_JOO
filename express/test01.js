
/*
[파일명 : test01.js] 
express를 이용하여 포트 3001 번을 사용하는 서버를 완성하세요.

조건 : 
http://localhost:3001/
웹페이지 접속 시 아래와 같이  "1번 문제 완성" 이라는 문구가 나오도록 완성하세요.

*/

const express = require('express');
const app= express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('1번 문제 완성!');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
