const express = require("express");
const router = express.Router();

let boardList = [];
let numOfBoard = 1;

router.get("/", (req, res) => {
    res.render('boardList', {"data" : boardList});
    // res.send(boardList);
});

router.post("/", (req, res) => {
    const board = {
        "id": numOfBoard++,
        "user_id": req.body.user_id,
        "date": req.body.date,
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);
    res.send("글이 등록되었습니다.");
});

router.delete("/:id", (req, res) => {
    // req.parms.id 값 리스트 삭제
    // 찾는 요소 findItem에 넣기
    const findItem = boardList.find((item) => {
        return item.id == req.params.id
    })
    const idx = boardList.indexOf(findItem)  // 배열 요소에 몇 번째 있는지
    boardList.splice(idx, 1)
    res.send("글이 삭제되었습니다.")
});

router.put("/:id", (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == req.params.id
    })
    const idx = boardList.indexOf(findItem)  // 배열 요소에 몇 번째 있는지
    boardList.splice(idx, 1)
    const board = {
        "id": numOfBoard++,
        "user_id": req.body.user_id,
        "date": req.body.date,
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);
    res.send("글이 수정되었습니다.");
});

module.exports = router;