const { Router } = require("express");
const { Class, Comment } = require("../db");
const {createComment} = require("../controllers/comments.js")
const router = Router();


router.post('/', createComment);


module.exports = router;
