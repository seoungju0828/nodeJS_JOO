const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/apple', function (req, res) {
    res.send('apple')
});

app.get('/home', function (req, res) {
    res.sendFile(__dirname+'/home.html')
});

app.listen(3000)