const express = require('express');
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res) => {
    // ("키","값",{속성})
    res.cookie("cookie","chickchok", {
        maxAge:5000 // maxAge : 유효기한
    });
    res.send("<h1>홈입니다.</h1>");
})

app.get("/cookie", (req,res)=>{
    const c1 = req.cookies.cookie;
    console.log(c1);
    res.send("<h1>쿠키 페이지입니다.</h1>");
})

app.get("/clear", (req,res)=>{
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.</h1>");
})

app.get("login", (req,res)=> {
    
})

app.get("logout", (req,res)=> {
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.</h1>");
})

app.listen(3900);

// app.use("/html2", express.static(path.join(__dirname, "html")));

// 미들웨어 함수
// const middle1 = (req, res, next) => {
//     console.log("미들웨어 실행");

//     //다음 미들웨어 또는 라우트 핸들러로 제어를 전달
//     next();
// };

// //미들웨어 함수 모듈에서 가져오기기
// const middle1 = require("./my_modules/middle1");

// app.use(middle1);

// app.all("/all", (req, res, next) => {
//     res.send("all");
//     next();
// });

// app.use("/use", (req, res, next) => {
//     res.send("use");
//     next();
// });

// app.get('/', function (req, res, next) {
//     console.log("경로 : ", path.join(__dirname, "html"));
//     // res.send('HelloWorld');
//     next();
// });

// app.get('/', function (req, res) {
//     console.log("두번째 / 입니다");
//     res.send('Hello World2');
// });

// app.get('/home', function (req, res, next) {
//     //애플리케이션 수준의 상태 저장장
//     req.app.locals.message = 'Hello, World~';
//     // res.sendFile(__dirname+'/home.html')
//     next();
// }, (req, res) => {
//     //응답 수준의 상태 저장
//     res.locals.additionalMessage = 'swag';

//     //저장된 상태 값 사용
//     const message = `${req.app.locals.message} ${res.locals.additionalMessage}`;
//     console.log(message);

//     res.sendFile(__dirname + '/home.html');
// });

// app.get('/grape/:name', function (req, res) {
//     // res.send(__dirname)
//     console.log('path', req.path)
//     console.log('params', req.params)
//     console.log('query', req.query)
//     res.send("포도 페이지입니다")
// });

// app.listen(3000)