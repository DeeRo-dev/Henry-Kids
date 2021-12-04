const { Router } = require("express");
const {createComment} = require("../controllers/comments.js");
const router = Router();


router.post("/", createComment);


module.exports = router;
