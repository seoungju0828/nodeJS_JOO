//npm i express-session
const express = require('express');
const app = express();
const session = require('express-session');

app.use(session ({
    secret : "NhoSeungJoo",
}));

app.get("/", (req, res) => {
    if (req.session.user) {
        res.send("세션 데이터가 없습니다. .getUser를 사용하여 세션을 확인하세요.");
    } else {
        res.send("세션 데이터가 없습니다. setUser를 사용하여 세션을 설정하세요.");
    }
});

app.get("/setUser", (req, res) => {
    req.session.user = {name : "JOO", age  : 19};
    res.redirect("/getUser");
});

app.get("/getUser", (req, res) => {
    res.send(req.session.user);
});

app.get("/deleteSession", (req, res) => {
    if (req.session.user) {
        req.session.destroy(() => {
            res.redirect("/getUser");
        });
    } else {
        res.send("제거할 세션이 없습니다.");
    }
});

app.get("/setUser/:name", (req, res) => {
    req.session.user = {
        name: req.params.name,
        age : 19
    };

    res.redirect("/getUser");
});

app.listen(8889, () => {
    console.log("8889번 포트입니다");
});