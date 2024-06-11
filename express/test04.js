/*
[파일명 : test04.js] 
mw_func 함수를 미들웨어로 등록하세요.
mw_func 함수 구현에 필수 요소는 console.log("미들웨어 실행"); 를 수행하면 됩니다.
(단 url이 /subject 로 시작하는 경로에만 등록하세요.)

조건 : 
http://localhost:3001/subject/node
=> 실행 시 console에 "미들웨어 실행" 출력 되며 브라우저에는 "노드입니다." 정상 출력

http://localhost:3001/
=> 실행 시 console에 아무것도 뜨지 않으며 브라우저에는 "홈입니다." 정상 출력

*/
const express = require('express');
const app= express();
const port = 3000;

//const mw_func 선언
const mw_func = (req, res, next) => {
    console.log("미들웨어 실행");

    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달
    next();
};

app.get("/",(req,res)=>{
    res.send("홈입니다.");
});

app.get('/subject/node',(req,res)=>{
    res.send(`노드입니다.`)
});

app.listen(port,()=>{
    console.log(`포트번호 : ${port}`);
});

