const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const server = http.createServer();
    
server.on('request', async(req, res) => {
    try {
        const data = await fs.readFile("./httpServer2.html");
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
        res.end("err : ", err.message);
    }
});

server.listen(8088, () => {
    console.log("8088번 포트에서 서버가 대기중입니다.");
});